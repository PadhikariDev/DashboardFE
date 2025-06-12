import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
    {
        department: 'Sales',
        A: 70,
        TotalEvaluation: 100,
    },
    {
        department: 'Marketing',
        A: 89,
        TotalEvaluation: 100,
    },
    {
        department: 'Support',
        A: 86,
        TotalEvaluation: 100,
    },
    {
        department: 'Logistics',
        A: 63,
        TotalEvaluation: 100,
    },
    {
        department: 'Research',
        A: 75,
        TotalEvaluation: 100,
    },
    {
        department: 'HR',
        A: 65,
        TotalEvaluation: 100,
    },
];

export const SummaryGraph = () => {
    return (
        <div className='p-4 col-span-4 rounded border border-stone-300'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="department" className='font-semibold text-sm' />
                    <PolarRadiusAxis />
                    <Radar name="kyler" dataKey="A" stroke="#FFD580" fill="#FFDAB9" fillOpacity={0.5} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}
