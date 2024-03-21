'use client'

import { HouseSimple, Buildings, ShoppingCart, Money, UserCircle, ClipboardText } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavLink from '../Navlink/page'





const Sidebar = () => {

    const iconSize = 22

    const basicOptions = [
        {
            title: 'Overview',
            icon: <HouseSimple size={iconSize} />,
            link: '/company/overview'
        },
        {
            title: 'Companies',
            icon: <Buildings size={iconSize} />,
            link: '/company/companies'
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
            title: 'Overview',
            icon: <HouseSimple size={iconSize} />,
            link: '/company/overview'
        },
        {
            title: 'Companies',
            icon: <Buildings size={iconSize} />,
            link: '/company/companies'
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





    return (
        <div className='border px-10 py-5 min-h-screen'>
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






        </div>
    )
}

export default Sidebar