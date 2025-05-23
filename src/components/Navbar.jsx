
import { Bars3Icon, EllipsisVerticalIcon, MagnifyingGlassIcon, MicrophoneIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Navbar = () => {
    return (
        <div className='fixed top-0 start-0 w-full bg-[#0f0f0f] z-30 flex justify-between items-center text-white p-2'>
            <div className='flex gap-3 items-center'>
                <button className=' hover:bg-gray-700 focus:bg-gray-600 rounded-full p-2'>
                    <Bars3Icon className='text-white h-6 w-6' />
                </button>
                <img className='w-10' src='https://cdn-icons-png.flaticon.com/128/1384/1384060.png' alt='' />
                <h2 className='text-white font-bold tracking-wider text-2xl'>YouTube</h2>
            </div>
            <div className='flex gap-3 items-center'>
                <div className=' w-2xl flex items-center rounded-full border border-gray-600'>
                    <button className='py-2 px-4'>
                        <MagnifyingGlassIcon className='text-white h-6 w-6' />
                    </button>
                    <input type='text' placeholder='Search' className='w-full outline-0 p-2 text-white focus:border focus:border-blue-900' />
                    <button className='py-2 px-4 bg-gray-700 rounded-e-full'>
                        <MagnifyingGlassIcon className='text-white h-6 w-6' />
                    </button>
                </div>
                <button className=' bg-gray-800 hover:bg-gray-700 focus:bg-gray-600 rounded-full p-2'>
                    <MicrophoneIcon className='text-white h-6 w-6' />
                </button>
            </div>
            <div className='flex items-center gap-2'>
                <button className='  hover:bg-gray-800 focus:bg-gray-700 rounded-full p-2'>
                    <EllipsisVerticalIcon className='text-white h-6 w-6' />
                </button>

                <button className='flex gap-2 px-2 py-1 border border-gray-600 items-center hover:bg-gray-600 focus:bg-gray-700 rounded-full'>
                    <UserCircleIcon className=' h-6 w-6' />
                    <h4 className='text-md'>Sign In</h4>
                </button>

            </div>
        </div>
    )
}

export default Navbar