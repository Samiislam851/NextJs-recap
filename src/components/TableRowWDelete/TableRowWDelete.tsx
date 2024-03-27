'use client'

import { Trash } from '@phosphor-icons/react'
import React, { useState } from 'react'

type Props = {
    handleDelete: (arg0: number) => void,
        id: number
}

const TableRowWDelete = ({ handleDelete, id }: Props) => {

    const [inputValue, setInputValue] = useState('')


    return (
        <div className='flex gap-3 '>
            <div className='basis-[90%] '>
                <input className='border w-full rounded' placeholder={`input field id = ${id}`} type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            </div>
            <div className='basis-[10%] '>
                <button onClick={() => handleDelete(id)}>
                    <Trash size={25} weight="fill" className='text-red-500' />
                </button>

            </div>

        </div>
    )
}

export default TableRowWDelete