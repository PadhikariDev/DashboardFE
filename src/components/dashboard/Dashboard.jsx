
import React from 'react'
import { Topbar } from './Topbar'
import { Grid } from './grid'
function Dashboard() {
    return (
        <div className="bg-white h-[200vh] p-2 shadow rounded-lg">
            <Topbar />
            <Grid/>
        </div>
    )
}

export default Dashboard