
import { Bars3Icon, EllipsisVerticalIcon, MagnifyingGlassIcon, MicrophoneIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Navbar = () => {
    return (
        <div className='fixed top-0 start-0 w-full bg-[#0f0f0f] z-30 flex justify-between items-center text-white p-2'>
            <div className='flex gap-3 items-center'>
                <button className=' hover:bg-gray-700 focus:bg-gray-600 rounded-full p-2'>
                    <Bars3Icon className='text-white h-6 w-6' />
                </button>
                <img className='w-7' src='https://cdn-icons-png.flaticon.com/128/1384/1384060.png' alt='' />
                <h2 className='text-white font-bold tracking-wider text-2xl'>YouTube</h2>
            </div>
            <div className='flex gap-3 items-center'>
                <div className='max-w-2xl flex items-center rounded-full border border-gray-600'>
                <input type='text' placeholder='Search' className='peer w-full text-sm outline-0 py-1.5 ps-4 text-white' />
                <button className='hidden peer-focus:block peer-focus:order-first  py-1.5 ps-4'>
                   <MagnifyingGlassIcon className='text-white h-5 w-5' />
               </button>
                    <button className='py-1.5 px-4 bg-gray-700 rounded-e-full'>
                        <MagnifyingGlassIcon className='text-white h-5 w-5' />
                    </button>
                </div>
                <button className='bg-gray-800 hover:bg-gray-700 focus:bg-gray-600 rounded-full p-2'>
                    <MicrophoneIcon className='text-white h-5 w-5' />
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