'use client'

import TableRowWDelete from '@/components/TableRowWDelete/TableRowWDelete'
import { globalAxios } from '@/utils/axiosConfigs'
import axios from 'axios'
import React, { useState } from 'react'

type Props = {}

const page = (props: Props) => {


    const [arr, setArr] = useState(Array.from({ length: 5 }, (_, index: number) => ({ id: index })))

    


    axios.get('').then(res => console.log(res.data)
    )

    const handleDelete = (id: number) => {
        console.log(id);


        setArr(prev => prev.filter(row => id !== row.id))
    }


    console.log(arr);



    return (
        <div>
            <h3 className='text-center font-medium text-2xl my-5 pt-5'>Input Table </h3>

            <div className='flex flex-col gap-2 max-w-md border border-2 rounded mx-auto px-7 py-7'>

                {
                    arr.map((data: any, i) =>
                        <TableRowWDelete handleDelete={handleDelete} id={data.id} key={data.id} />
                    )
                }

            </div>


        </div>
    )
}

export default page