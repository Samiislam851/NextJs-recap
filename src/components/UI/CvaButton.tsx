'use client'
import { cva } from "class-variance-authority";
import clsx from "clsx";
import React, { ReactNode } from 'react'


interface ButtonProps {
    intent?: 'primary' | 'secondary',
    size: 'small' | 'medium',
    children: ReactNode,
    disabled?: boolean,
    animate?: boolean
}


const button = cva(
    ['font-medium', 'border', 'rounded', 'text-white'],
    {
        variants: {
            intent: {
                primary: ['bg-blue-600', 'border-transparent'],
                secondary: ['bg-green-500']
            },
            size: {
                small: ['text-sm', 'py-1', 'px-2'],
                medium: ['text-base', 'py-2', 'px-4']
            },
        },

    }
)

const CvaButton = ({ children, intent, size, disabled = false, animate = false }: ButtonProps) => {

    const dynamicClasses = button({ intent, size });
    
    const additionalClasses = clsx({
        'disabled': disabled === true,
        'transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105': animate === true
    })
    const combinedClasses = dynamicClasses + ' ' + additionalClasses


    return <button className={combinedClasses}>{children}</button>

}

export default CvaButton