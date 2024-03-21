'use client'

import CvaButton from '@/components/UI/CvaButton';
import { CaretLeft, CaretRight, MagnifyingGlass } from '@phosphor-icons/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

type Props = {}

const Companies = (props: Props) => {


    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalCount, setTotalCount] = useState<number>(0)



    const pageSize = 10
    const token = localStorage.getItem('basic-login')


    const { data, isError, isFetching } = useQuery<unknown, Error>({
        queryKey: ['users'],
        queryFn: () => {





            return axios.get(`http://192.168.0.168:5000/company/list?page=${currentPage}&size=${pageSize}&query=`, {
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
        }
    })





    console.log(data, isError, isFetching);



    const { register, handleSubmit, setValue, reset } = useForm();

    const onSubmit = (data: any) => {
        console.log(data.searchTerm);
        reset()
    };

    const headerClasses = "bg-gray-100 text-gray-700 w-full ps-2 py-2 font-medium text-sm uppercase"




    return (
        <div className='p-5'>


            <div className='flex justify-between '>
                <div>
                    <p className='text-blue-600'>Companies</p>
                    <h3 className='text-3xl font-bold pt-3 text-gray-800'>All Companies</h3>
                </div>
                <div>
                    <div className='px-3 py-3 rounded bg-gray-100 text-gray-400 text-center rounded-full cursor-pointer'>EM</div>
                </div>

            </div>





            {/* Search bar section  */}
            <div className='flex justify-between pt-5 '>
                <div className='basis-[70%]'>

                    <form onSubmit={handleSubmit(onSubmit)} className="relative">
                        <MagnifyingGlass className='absolute bottom-[7px] text-gray-500' size={25} />
                        <input
                            type="text"
                            placeholder="Search by name, phone, email, location"
                            {...register('searchTerm')}
                            className="w-full h-10 ps-10  py-2 border-b border-gray-300  outline-none focus:outline-none  transition-all ease-in-out duration-300"
                        />

                        <CvaButton className='absolute top-[-7px] right-0 mt-3 mr-4 text-gray-500' type="submit" size='small' intent='secondary' animate={true} >Search</CvaButton>

                    </form>
                </div>
                <div>
                    <CvaButton intent='primary' size='medium' animate={true} plusIcon={true}>Add people</CvaButton>
                </div>

            </div>



            {/* Table Section */}

            <div className='grid grid-cols-6 text-start pt-3'>
                <div className="flex flex-col justify-start items-center w-full ">
                    <div className={headerClasses}>Company</div>
                </div>
                <div className="flex flex-col justify-start items-center w-full ">
                    <div className={headerClasses}>Phone</div>
                </div>
                <div className="flex flex-col justify-start items-center w-full ">
                    <div className={headerClasses}>Email</div>
                </div>
                <div className="flex flex-col justify-start items-center w-full ">
                    <div className={headerClasses}>Location</div>
                </div>
                <div className="flex flex-col justify-start items-center w-full ">
                    <div className={headerClasses}>Products</div>
                </div>
                <div className="flex flex-col justify-start items-center w-full ">
                    <div className={headerClasses}>Action</div>
                </div>
            </div>


            {/* {companiesList.map()} */}






            {/* pagination control */}

            <div className="flex  justify-between pt-5 text-gray-500">

                <span>
                    Showing {currentPage * 10} of 
                    {/* {data&& data.count} */}
                </span>

                <div className='border'>
                    <button disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => prev - 1)}>
                        <CaretLeft size={25} />
                    </button>


                    <button disabled={currentPage === 10} onClick={() => setCurrentPage((prev) => prev + 1)}>
                        <CaretRight size={25} />
                    </button>
                </div>

            </div>


        </div>

    )
}

export default Companies