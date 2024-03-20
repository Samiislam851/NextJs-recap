'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='border px-10 py-5'>
            <div className='w-fit mx-auto'>
                <Image src={'/Main_Logo_1.png'} height={70} width={150} alt='Logo' />
            </div>





            {/* Links */}
            <div className='flex flex-col gap-2'>
                <div>
                    <Link href={'overView'}>Overview</Link>
                </div>
                <Link href={'companies'}>Companies</Link>







            </div>
        </div>
    )
}

export default Sidebar