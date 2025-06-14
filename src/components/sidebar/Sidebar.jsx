import React from 'react'
import AccountToogles from './AccountToogles'
import { Search } from './Search'
import { RouteSelect } from './RouteSelect'
import { Plan } from './Plan'
function Sidebar() {
    return (
        <div>
            <div className='overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]'>
                <AccountToogles />
                <Search />
                <RouteSelect />
            </div>

            <Plan />

        </div>
    )
}

export default Sidebar