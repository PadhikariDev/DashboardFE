import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
export const Search = () => {
    return (
        <div className='bg-stone-200 relative rounded flex items-center px-2 py-1.5 mb-4 text-sm'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='mr-2' />
            <input type="text" placeholder='Search' className=' mr-2 w-full bg-transparent focus:outline-none placeholder:text-stone-400 ' />
        </div>
    )
}
