import React from 'react'
import { StatsCards } from './StatsCards'
import { ActivityGraph } from './ActivityGraph'
import { SummaryGraph } from './SummaryGraph'
import { DetailsGraph } from './DetailsGraph'
export const Grid = () => {
    return (
        <div className='px-4 grid gap-3 grid-cols-12'>
            <StatsCards />
            <ActivityGraph />
            <SummaryGraph />
            <DetailsGraph />
        </div>
    )
}
