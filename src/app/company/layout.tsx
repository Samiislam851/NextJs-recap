'use client'
import Sidebar from '@/components/Sidebar/Sidebar'
import { useRouter } from 'next/navigation'
import React, { ReactNode, useEffect } from 'react'

type Props = {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    const router = useRouter()




    useEffect(() => {

        const userState = localStorage.getItem('basic-login')
        if (!userState) {

            router.push('/login')

        }
    })

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