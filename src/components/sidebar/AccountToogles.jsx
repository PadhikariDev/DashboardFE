import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
function AccountToogles() {
    return (
        <div className='border-b mb-4 mt-2 pb-4 border-stone-200'>
            <button className='flex p-0.5 hover:bg-stone-300 hover:cursor-pointer rounded transition-colors relative gap-2 w-full items-center'>
                <img src="https://api.dicebear.com/9.x/notionists/svg?seed=Jocelyn"
                    alt="avatar"
                    className='size-10 rounded shrink shadow bg-orange-200' />
                <div className="textStart">
                    <span className='text-sm font-semibold block text-[#422609]'>Kyler Buckeyez</span>
                    <span className='text-xs block text-[#767070]'>kyler@gmail.com</span>
                </div>
                <FontAwesomeIcon icon={faRightToBracket} className='absolute right-2 text-xs text-[#422609]' />
            </button>

        </div>
    )
}

export default AccountToogles