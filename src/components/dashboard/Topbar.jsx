import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
export const Topbar = () => {
    return (
        <div className='border-b px-4 mb-4 mt-2 pb-2 border-stone-200'>
            <div className="flex items-center justify-between p-0.5">
                <div>
                    <span className="text-sm font-bold block">Good moring, Kyler!</span>
                    <span className="text-sm block text-stone-500">
                        Tuesday , Jun 28th 2
                    </span>
                </div>
                <button className='flex text-sm items-center gap-2 bg-stone-200 px-3 py-1.5 rounded hover:bg-stone-100 hover:cursor-pointer'>
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <span>Prev 6 Months</span>
                </button>
            </div>
        </div>
    )
}
