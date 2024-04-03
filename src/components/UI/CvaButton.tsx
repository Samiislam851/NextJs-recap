'use client'
import { PlusCircle } from "@phosphor-icons/react";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import React, { ReactNode } from 'react'


interface ButtonProps {
    intent?: 'primary' | 'secondary' | 'plain',
    size: 'small' | 'medium',
    children: ReactNode,
    disabled?: boolean,
    animate?: boolean,
    className?: string,
    plusIcon?: boolean,
    onClick?: any,
    type?: "submit" | "reset" | "button" | undefined
}


const button = cva(
    ['border', 'rounded-md'],
    {
        variants: {
            intent: {
                primary: ['bg-blue-600', 'border-transparent', 'text-white'],
                secondary: ['bg-gray-100', ' hover:bg-red-500 hover:text-white', 'text-gray-700 font-medium'],
                plain: ['bg-gray-100', '  hover:bg-blue-500 hover:text-white', 'text-gray-700 font-medium']
            },
            size: {
                small: ['text-sm', 'py-1', 'px-2'],
                medium: ['text-sm', 'py-[.4rem]', 'px-4']
            },
        },

    }
)

const CvaButton = ({ onClick, className, type, children, intent, size, disabled = false, animate = false, plusIcon = false }: ButtonProps) => {

    const dynamicClasses = button({ intent, size });


    return <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={
            clsx(dynamicClasses, className, 'flex gap-2 items-center justify-center',
                { "cursor-not-allowed bg-gray-400": disabled === true },
                { "transition-all duration-300 ease-in-out ": animate === true })} >

        {plusIcon && <PlusCircle size={20} />}
        <span className={clsx({'ps-1': plusIcon})}>{children}</span>
    </button>

}

export default CvaButton