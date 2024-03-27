'use client'
import Sidebar from '@/components/Sidebar/Sidebar'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { ReactNode, useEffect } from 'react'
import { useSelector } from 'react-redux'

type Props = {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    const router = useRouter()

    const user = useSelector((state: any) => state.user)

    useEffect(() => {

        const userState = localStorage.getItem('basic-login')
        if (!userState || !user) {

            router.push('/login')

        }

    }, [user])









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