'use client'

import { HouseSimple, Buildings, ShoppingCart, Money, UserCircle, ClipboardText, SignOut } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavLink from '../Navlink/page'
import { useDispatch } from 'react-redux'
import { logOutAction } from '@/features/userSlice'
import { persistor } from '@/store/store'





const Sidebar = () => {

    const iconSize = 22
    const dispatch = useDispatch()
    const basicOptions = [
        {
            title: 'Overview',
            icon: <HouseSimple size={iconSize} />,
            link: '/company/overview'
        },
        {
            title: 'Companies',
            icon: <Buildings size={iconSize} />,
            link: '/company/companies?page=1&size=10&query='
        },
        {
            title: 'Products',
            icon: <ShoppingCart size={iconSize} />,
            link: '/company/products'
        },
        {
            title: 'Financial',
            icon: <Money size={iconSize} />,
            link: '/company/financial'
        },
        {
            title: 'Reports',
            icon: <ClipboardText size={iconSize} />,
            link: '/company/reports'
        },
        {
            title: 'Users',
            icon: <UserCircle size={iconSize} />,
            link: '/company/users'
        },
    ];
    const resourcesOptions = [
        {
            title: 'Roles',
            icon: <UserCircle size={iconSize} />,
            link: '/company/roles'
        },
        {
            title: 'Team',
            icon: <Buildings size={iconSize} />,
            link: '/company/team'
        },
        {
            title: 'Rate',
            icon: <ShoppingCart size={iconSize} />,
            link: '/company/Rate'
        }
    ];


    const handleLogout = () => {

        localStorage.removeItem('basic-login')

        dispatch(logOutAction())


        persistor.purge()
    }




    return (
        <div className='border px-10 py-5 min-h-screen flex flex-col justify-between'>
            <div className='w-fit mx-auto'>
                <Image src={'/Main_Logo_1.png'} height={70} width={150} alt='Logo' />
            </div>


            {/* Links */}

            <div className='flex flex-col items-start  gap-2 py-5 w-full '>
                {basicOptions.map((option, i) =>
                    <NavLink key={i} href={option.link} icon={option.icon} >
                        {option.title}
                    </NavLink>

                )}

            </div>


            {/* Resources */}
            <p className='text-gray-400 font-medium pb-5'>Resources</p>
            <div className='flex flex-col items-start  gap-2 py-5 w-full '>
                {resourcesOptions.map((option, i) =>
                    <NavLink key={i} href={option.link} icon={option.icon} >
                        {option.title}
                    </NavLink>
                )}

            </div>


            <div>
                <button
                    className='flex items-center text-red-500  flex gap-3 border border-gray-300 px-5 py-2 rounded-lg shadow hover:border-red-500 hover:border-opacity-70 transition-all duration-300 hover:shadow-lg'
                    onClick={handleLogout}

                >


                    <span >Logout</span>

                    <SignOut size={20} />
                </button>
            </div>


        </div>
    )
}

export default Sidebar