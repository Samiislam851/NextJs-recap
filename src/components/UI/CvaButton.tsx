'use client'
import { cva } from "class-variance-authority";
import clsx from "clsx";
import React, { ReactNode } from 'react'


interface ButtonProps {
    intent?: 'primary' | 'secondary',
    size: 'small' | 'medium',
    children: ReactNode,
    disabled?: boolean,
    animate?: boolean,
    className?: string,
    plusIcon?: boolean
}


const button = cva(
    ['font-medium', 'border', 'rounded', 'text-white'],
    {
        variants: {
            intent: {
                primary: ['bg-blue-600', 'border-transparent'],
                secondary: ['bg-green-500 hover:bg-green-700']
            },
            size: {
                small: ['text-sm', 'py-1', 'px-2'],
                medium: ['text-base', 'py-2', 'px-4']
            },
        },

    }
)

const CvaButton = ({ className, children, intent, size, disabled = false, animate = false, plusIcon = false }: ButtonProps) => {

    const dynamicClasses = button({ intent, size });


    return <button disabled={disabled} className={clsx(dynamicClasses, className, { "cursor-not-allowed bg-gray-400": disabled === true }, { 'transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105': animate === true })}>{children}</button>

}

export default CvaButton