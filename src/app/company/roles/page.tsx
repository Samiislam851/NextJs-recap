'use client'

import SlideForm from '@/components/SlideForm/SlideForm'
import CvaButton from '@/components/UI/CvaButton'
import clsx from 'clsx'
import React, { useState } from 'react'

type Props = {}

const page = (props: Props) => {
    
    const [isFormOpen, setIsFormOpen] = useState(false)


    return (
        <div className='h-screen w-full relative'>
            <div
                className={clsx('absolute w-[500px] right-[-500px] transition-all ease-in-out duration-700',
                    { 'border  translate-x-[-500px] ': isFormOpen },
                    { 'border  translate-x-0': !isFormOpen })}>
                <SlideForm setIsFormOpen={setIsFormOpen} isFormOpen={isFormOpen} />

            </div>
            <CvaButton onClick={() => setIsFormOpen(!isFormOpen)} size={'medium'} intent='primary' plusIcon>Add</CvaButton>
        </div>
    )
}

export default page