import React from 'react'

export const Plan = () => {
    return (
        <div className='flex sticky top-[calc(100vh-48px-16px)] flex-col h-12 border-t px-2 justify-end text-xs border-stone-200'>
            <div className="flex items-center justify-between">
                <div>
                    <p className='font-bold'>Enterprise</p>
                    <p className='font-[#422609]'>Pay as you go</p>
                </div>
                <button className="px-2 font-medium bg-stone-200 rounded py-1.5 transition-colors hover:bg-stone-100 hover:cursor-pointer">Support</button>
            </div>
        </div>
    )
}
