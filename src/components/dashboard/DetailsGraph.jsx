import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { RadialBarChart, RadialBar } from 'recharts';
import { ComposedChart, Line, Area, } from 'recharts';


const data = [
    {
        name: 'Electronics',
        uv: 4000,
        productSales: 6400,
        amt: 24000,
    },
    {
        name: 'Apparel',
        uv: 3000,
        productSales: 1398,
        amt: 22100,
    },
    {
        name: 'Home Decor',
        uv: 2000,
        productSales: 9800,
        amt: 22900,
    },
    {
        name: 'Books',
        uv: 2780,
        productSales: 3908,
        amt: 20000,
    },
    {
        name: 'Groceries',
        uv: 1890,
        productSales: 7800,
        amt: 21810,
    },
    {
        name: 'Sports',
        uv: 2390,
        productSales: 3800,
        amt: 25000,
    },
    {
        name: 'Beauty',
        uv: 3490,
        productSales: 8300,
        amt: 21000,
    },
];

const data01 = [
    {
        name: 'North America',
        uv: 35.2,           // Market share in %
        fill: '#8884d8',    // Light Blue-Violet
    },
    {
        name: 'Europe',
        uv: 25.1,
        fill: '#83a6ed',    // Blue
    },
    {
        name: 'Asia-Pacific',
        uv: 18.3,
        fill: '#8dd1e1',    // Light Teal
    },
    {
        name: 'South America',
        uv: 9.7,
        fill: '#82ca9d',    // Green
    },
    {
        name: 'Africa',
        uv: 6.2,
        fill: '#a4de6c',    // Yellow-Green
    },
    {
        name: 'Middle East',
        uv: 3.5,
        fill: '#d0ed57',    // Light Yellow
    },
    {
        name: 'Other',
        uv: 2.0,
        fill: '#ffc658',    // Light Orange
    },
];


const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};
const data02 = [
    {
        name: 'January',
        actual: 590,   // Actual performance
        target: 800,   // Target
        variance: 1400, // Optional: KPI like sales growth or cost
    },
    {
        name: 'February',
        actual: 868,
        target: 967,
        variance: 1506,
    },
    {
        name: 'March',
        actual: 1397,
        target: 1098,
        variance: 989,
    },
    {
        name: 'April',
        actual: 1480,
        target: 1200,
        variance: 1228,
    },
    {
        name: 'May',
        actual: 1520,
        target: 1108,
        variance: 1100,
    },
    {
        name: 'June',
        actual: 1400,
        target: 680,
        variance: 1700,
    },
];

export const DetailsGraph = () => {

    return (
        <>
            <div className='col-span-12 p-4 rounded border border-stone-300'>
                <div className='grid grid-cols-3 gap-4 h-64'>
                    <div className='rounded border border-stone-300 p-4 h-64'>
                        <h3 className='text-center text-lg font-semibold '>Product Sales</h3>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 0,
                                    right: 0,
                                    left: 0,
                                    bottom: 0,
                                }}
                                barSize={20}
                            >
                                <XAxis dataKey="name" scale="point" padding={{ left: 8, right: 8 }} />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Bar dataKey="productSales" fill="#7FB3D5" background={{ fill: '#eee' }} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className='rounded border border-stone-300 p-4 h-64'>
                        <h3 className='text-center text-lg font-semibold '> Business Data: Market Share by Region</h3>
                        <ResponsiveContainer width="100%" height="100%">
                            <RadialBarChart cx="30%" cy="50%" innerRadius="20%" outerRadius="80%" barSize={10} data={data01}>
                                <RadialBar
                                    minAngle={15}
                                    background
                                    clockWise
                                    dataKey="uv"
                                />
                                <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
                            </RadialBarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className='rounded border border-stone-300 p-4 h-64'>
                        <h3 className='text-center text-lg font-semibold '>Target vs Actual Performance</h3>
                        <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart
                                width={500}
                                height={400}
                                data={data02}
                                margin={{
                                    top: 20,
                                    right: 80,
                                    bottom: 20,
                                    left: 20,
                                }}
                            >
                                <CartesianGrid stroke="#f5f5f5" />
                                <XAxis dataKey="name" label={{ value: 'Pages', position: 'insideBottomRight', offset: 0 }} scale="band" />
                                <YAxis label={{ value: 'Index', angle: -90, position: 'insideLeft' }} />
                                <Tooltip />
                                <Legend />
                                <Area type="monotone" dataKey="variance" fill="#8884d8" stroke="#8884d8" />
                                <Bar dataKey="target" barSize={20} fill="#413ea0" />
                                <Line type="monotone" dataKey="actual" stroke="#ff7300" />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </>
    )
}
