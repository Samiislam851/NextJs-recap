'use client'
import { cva } from "class-variance-authority";
import React, { ReactNode } from 'react'
interface ButtonProps {
    intent: 'primary' | 'secondary',
    size: 'small' | 'medium',
    children: ReactNode
}


const button = cva(
    ['font-medium', 'border', 'rounded', 'text-white'],
    {
        variants: {
            intent: {
                primary: ['bg-red-600', 'border-transparent'],
                secondary: ['bg-green-500']
            },
            size: {
                small: ['text-sm', 'py-1', 'px-2'],
                medium: ['text-base', 'py-2', 'px-4']
            },
        },

    }
)

const CvaButton = ({ children, intent, size }: ButtonProps) => {

    const buttonClasses = button({ intent, size });
    console.log(buttonClasses);


    return <button className={buttonClasses}>{children}</button>

}

export default CvaButton