import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Week 1',
        uniqueVisitor: 4000,         // Unique site visitors
        productViews: 2400,         // Product views
        amt: 24000,       // Revenue in $
    },
    {
        name: 'Week 2',
        uniqueVisitor: 3000,
        productViews: 1398,
        amt: 22100,
    },
    {
        name: 'Week 3',
        uniqueVisitor: 2000,
        productViews: 9800,
        amt: 22900,
    },
    {
        name: 'Week 4',
        uniqueVisitor: 2780,
        productViews: 3908,
        amt: 20000,
    },
    {
        name: 'Week 5',
        uniqueVisitor: 1890,
        productViews: 4800,
        amt: 21810,
    },
    {
        name: 'Week 6',
        uniqueVisitor: 2390,
        productViews: 3800,
        amt: 25000,
    },
    {
        name: 'Week 7',
        uniqueVisitor: 3490,
        productViews: 4300,
        amt: 21000,
    },
];


export const ActivityGraph = () => {
    return (
        <div className='p-4 col-span-8 rounded border border-stone-300'>
            <div className='h-64'>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis yAxisId="left" />
                        <YAxis yAxisId="right" orientation="right" />
                        <Tooltip />
                        <Legend />
                        <Line yAxisId="left" type="monotone" dataKey="productViews" stroke="#7FB3D5" activeDot={{ r: 8 }} />
                        <Line yAxisId="right" type="monotone" dataKey="uniqueVisitor" stroke="#F5B041" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
