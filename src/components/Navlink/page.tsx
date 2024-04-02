'use client'
import React, { ReactNode } from 'react'
import Link from 'next/link';

import { Icon } from '@phosphor-icons/react';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
interface props {
    href: string,
    children: ReactNode,
    icon: ReactNode
}
const NavLink = ({ href, icon, children }: props) => {
    const pathname = usePathname();



    // console.log('href====', href, 'pathname===', pathname);
    
    const isActive = href.includes(pathname) || pathname.includes(href);

    return (
        <div className='font-medium w-full'>
            <Link href={href}>
                <div className={clsx(
                    'flex gap-2 items-center justify-start p-2 rounded-md w-full ',
                    { ' text-blue-500 bg-[#E8F1FE] border  border-blue-300 border-opacity-30 ': isActive === true },
                    { ' text-gray-500  border border-transparent ': isActive === false },
                )}>
                    <span className='font-bold'>{icon}</span>  <span>{children}</span>
                </div>
            </Link >
        </div>
    );
};

export default NavLink;