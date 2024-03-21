'use client'
import Sidebar from '@/components/Sidebar/Sidebar'
import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <div className='flex w-screen h-screen overflow-x-hidden'>
                <div className='w-fit'>
                    <Sidebar />
                </div>

                <div className='flex-1'>
                    <div>
                        {children}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Layout