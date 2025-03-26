import Link from 'next/link'
import React from 'react'


function NacBar() {
    return (
        <nav
            className='bg-green-500 p-5  h-15 flex items-center justify-between shadow-lg shadow-black rounded-2xl mt-5 ml-5 mr-5'>
            <Link href='/' className='text-white text-2xl font-bold hover:not-only-of-type:scale-110' >
                MongoDB Crud
            </Link>
            <Link href='/NewAdd'
                className='text-black text-lg font-bold hover:bg-gray-300 transform hover:scale-110 bg-white p-2 rounded-lg'

            >
                NewAdd
            </Link>

        </nav>
    )
}

export default NacBar
