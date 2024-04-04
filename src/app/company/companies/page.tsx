'use client'

import TableData from '@/components/TableData/TableData';
import CvaButton from '@/components/UI/CvaButton';
import LoadingUI from '@/components/UI/LoadingUI';
import { TableDataType } from '@/utils/tableDataType';

import { CaretLeft, CaretRight, MagnifyingGlass } from '@phosphor-icons/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import Pagination from './Pagination';
import { useSelector } from 'react-redux';
import useAxiosConfig from '@/utils/axiosConfig';
// import clientAxios from '@/utils/axiosConfig';

type Props = {}

const Companies = (props: Props) => {
    const clientAxios = useAxiosConfig()
    const { register, handleSubmit } = useForm();
    const searchParams = useSearchParams()
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get('page') ?? '1') ?? 1)
    const [searchTerm, setSearchTerm] = useState(searchParams.get('query') ?? '')

    const userState = useSelector((state: any) => state.user)



    console.log('the state....................', userState.user);



    const pageSize = 10
    const token = localStorage.getItem('basic-login')

    const { data, isError, isFetching, refetch } = useQuery<TableDataType, Error, TableDataType>({
        queryKey: ['users'],
        queryFn: () => {
            return clientAxios.get(`company/list?page=${currentPage}&size=${pageSize}&query=${searchTerm}`)
        }
    })




    const onSubmit = (data: any) => {
        console.log(data.searchTerm);
        setSearchTerm(data.searchTerm)
        setCurrentPage(1)
    };

    console.log(data, isError, isFetching);

    useEffect(() => {
        router.push(`/company/companies?page=${currentPage}&size=${pageSize}&query=${searchTerm}`)
        refetch()
    }, [currentPage, searchTerm])



    const headerClasses = "bg-gray-100 text-gray-700 w-full ps-2 py-2 font-medium text-sm uppercase"




    return (
        <div className='p-5 h-screen overflow-y-scroll'>
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
                        {/* @ts-ignore */}
                        <MagnifyingGlass className={'absolute bottom-[7px] text-gray-500'} size={25} />
                        <input
                            defaultValue={searchParams.get('query') ?? ''}
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






            {isFetching ? <LoadingUI /> :

                <>

                    {/* Table Section */}

                    <div className='grid grid-cols-6 text-start pt-3'>
                        <div className="flex flex-col justify-start items-center w-full ">
                            <div className={headerClasses}> Company </div>
                        </div>
                        <div className="flex flex-col justify-start items-center w-full ">
                            <div className={headerClasses}> Phone </div>
                        </div>
                        <div className="flex flex-col justify-start items-center w-full ">
                            <div className={headerClasses}> Email </div>
                        </div>
                        <div className="flex flex-col justify-start items-center w-full ">
                            <div className={headerClasses}> Location </div>
                        </div>
                        <div className="flex flex-col justify-start items-center w-full ">
                            <div className={headerClasses}> Products </div>
                        </div>
                        <div className="flex flex-col justify-start items-center w-full ">
                            <div className={headerClasses}> Action </div>
                        </div>
                    </div>



                    {data ? <>

                        {data?.data.data.map((companyData: any, i: number) => <TableData key={i} companyData={companyData} />)
                        }



                    </> : <></>}


                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} data={data} />

                </>

            }

        </div>

    )
}

export default Companies