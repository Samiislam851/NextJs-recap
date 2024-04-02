'use client'

import CvaButton from '@/components/UI/CvaButton';
import { AddressBook, Calendar, CalendarBlank, CaretRight, MagnifyingGlass, PencilSimpleLine } from '@phosphor-icons/react'
import React, { useState } from 'react'
import { RxCaretRight } from "react-icons/rx";
// @ts-ignore
import DatePicker from "react-datepicker";
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";
import Link from 'next/link';

type Props = {}

const Details = (props: Props) => {


    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];


    const [startDate, setStartDate] = useState(null);
    const [selectedOption, setSelectedOption] = useState<{ value: string; label: string; }[] | null>(null);




    const headerClasses = "bg-gray-100 text-blue-700 w-full ps-2 py-2 font-semibold text-sm uppercase"
    const headerClasses2 = "text-gray-700 w-full ps-2 py-2 font-medium text-sm "

    const classes = 'flex flex-col justify-start items-center w-full border-b py-1'

    return (
        <div>
            <div className='flex justify-between p-7'>
                <div className='space-y-2'>
                    <div className='flex gap-2 text-gray-400 text-sm font-semibold'>
                        <div>Products</div>
                        <RxCaretRight className='text-2xl' />
                        <div>Details</div>
                        <RxCaretRight className='text-2xl' />

                        <div className='text-blue-500'>Rate Sheet Details</div>


                    </div>
                    <div>
                        <h2 className='text-3xl font-bold text-gray-700'>Rates 1 Sheet Details</h2>

                    </div>

                </div>
                <div>
                    <div className='w-10 h-10 rounded-full bg-gray-200 bg-opacity-30 text-gray-400 text-center py-2'>EM</div>

                </div>
            </div>



            {/* Information */}
            <div className='w-[85%]  mx-auto'>
                <div>
                    <h3 className='text-gray-700 text-xl font-bold'>Information</h3>

                    <div className='w-[40rem]  flex gap-7 text-gray-600 py-1 '>
                        <div className='basis-[15%] text-gray-400 font-medium '>Rates Sheet</div>   <div className='flex-grow flex '>: &nbsp;Rates 1 sheet <div className='bg-blue-100 text-blue-500 rounded mx-3 px-3'>-10% discount</div></div>

                    </div>
                    <div className='w-[40rem] flex gap-7 text-gray-600 py-1 '>
                        <div className='basis-[15%] text-gray-400 font-medium' >Start Date</div>   <div className='flex-grow flex'>: <Calendar size={20} className='mx-2' /> 1 Sep 2023 </div>

                    </div>
                    <div className='w-[40rem]  flex gap-7 text-gray-600 py-1 '>
                        <div className='basis-[15%] text-gray-400 font-medium' >Total Roles</div>   <div className='flex-grow flex'>: <AddressBook size={20} className='mx-2' />8 </div>

                    </div>




                </div>

                {/* Team Structure Header */}

                <div className='flex justify-between py-5'>

                    <div><h3 className='font-semibold text-xl text-gray-700'>Team Structure</h3></div>
                    <div className='flex gap-5'>
                        <div>
                            <div className='flex items-center py-[6px] gap-2 border border-gray-300 rounded p-1 '>
                                <CalendarBlank size={20} />
                                <DatePicker
                                    className='focus:outline-none focus:border-none'
                                    placeholderText={`Pick a start date - end date`}
                                    selected={startDate} onChange={(date: any) => {
                                        return setStartDate(prev => date)
                                    }} />

                            </div>
                        </div>

                        <div>
                            <Select
                                className='min-w-[10rem] text-gray-600 '
                                defaultValue={selectedOption}
                                placeholder='Filter by work type'
                                // @ts-ignore
                                onChange={(newValue, actionMeta) => setSelectedOption(newValue)}
                                options={options}
                            />


                        </div>
                        <div>
                            <Link href={'/company/products/details/update'}>

                                <CvaButton intent='primary' type='button' size='medium' animate > <span className='flex gap-1'>

                                    <PencilSimpleLine size={16} />  Edit</span>

                                </CvaButton>

                            </Link>
                        </div>


                    </div>




                </div>







                {/* Search bar section  */}

                <div className='w-full'>

                    <form className="relative">
                        {/* @ts-ignore */}
                        <MagnifyingGlass className={'absolute bottom-[7px] text-gray-500'} size={25} />
                        <input

                            type="text"
                            placeholder="Search by role, member"

                            className="w-full h-10 ps-10  py-2 border-b border-gray-300  outline-none focus:outline-none  transition-all ease-in-out duration-300"
                        />

                        <CvaButton className='absolute top-[-7px] right-0 mt-3 mr-4 text-gray-500' type="submit" size='small' intent='secondary' animate={true} >Search</CvaButton>

                    </form>
                </div>



                {/* Table Section */}


                {/* Header */}
                <div className='grid grid-cols-7 text-start pt-3 '>
                    <div className="flex flex-col justify-start items-center w-full ">
                        <div className={headerClasses}>Role</div>
                    </div>
                    <div className="flex flex-col justify-start items-center w-full ">
                        <div className={headerClasses}>Member</div>
                    </div>
                    <div className="flex flex-col justify-start items-center w-full ">
                        <div className={headerClasses}>Internal</div>
                    </div>
                    <div className="flex flex-col justify-start items-center w-full ">
                        <div className={headerClasses}>Billing</div>
                    </div>
                    <div className="flex flex-col justify-start items-center w-full ">
                        <div className={headerClasses}>Stat Date</div>
                    </div>
                    <div className="flex flex-col justify-start items-center w-full ">
                        <div className={headerClasses}>End Date</div>
                    </div>
                    <div className="flex flex-col justify-start items-center w-full ">
                        <div className={headerClasses}>Work Type</div>
                    </div>
                </div>

                {/* Body */}


                <div className='grid grid-cols-7 text-start pt-0'>
                    <div className={classes}>
                        <div className={headerClasses2}>Smart Solutions</div>
                    </div>
                    <div className={classes}>
                        <div className={headerClasses2}>Corina McCoy</div>
                    </div>
                    <div className={classes}>
                        <div className={headerClasses2}>$ 63.53</div>
                    </div>
                    <div className={classes}>
                        <div className={headerClasses2}>$ 1083.35</div>
                    </div>
                    <div className={classes}>
                        <div className={headerClasses2}> 15 oct 2023</div>
                    </div>
                    <div className={classes}>
                        <div className={headerClasses2}>24 sept</div>
                    </div>
                    <div className={classes}>
                        <div className={headerClasses2}><div className='text-blue-500 rounded-lg bg-blue-100 text-center py-[1px]'>Part time</div></div>
                    </div>
                </div>




            </div>








        </div>
    )
}

export default Details