import clsx from 'clsx'
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode,
  type: 'primary' | 'secondary',
  animate?: boolean
}

const CustomButton = ({ children, type, animate }: Props) => {
  return (
    <div
      className={clsx('px-6 py-3 rounded-md text-white font-medium cursor-pointer',
        {
          'bg-blue-600 ': type === 'primary',
          'bg-amber-700 ': type === 'secondary',
          'transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105': animate === true
        })}

    >{children}</div>
  )
}

export default CustomButton