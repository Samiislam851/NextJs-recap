'use client'
import { CalendarBlank, CheckCircle, Copy, MinusCircle, UserCircle } from '@phosphor-icons/react'
import React, { useState } from 'react'
import Select from 'react-select'
import './update.css'
//@ts-ignore
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {}

const Update = (props: Props) => {







    const [startDate, setStartDate] = useState(null);



    const options = [
        { value: 'RateSheet1', label: 'RateSheet1' },
        { value: 'RateSheet2', label: 'RateSheet2' },
        { value: 'RateSheet3', label: 'RateSheet3' },

    ];

    const [selectedOption, setSelectedOption] = useState<{ value: string, label: string } | null>(null);
    return (
        <div >
            <div className='p-7 bg-[#FAFBFC]'>
                <h3 className='text-2xl text-gray-600 font-semibold'>
                    Update Rate Sheet
                </h3>

                <p className='text-gray-400'> Update and customize rate sheet information</p>
            </div>

            <div className='m-10'>
                <div className='flex py-5 gap-10'>
                    <h3 className='basis-[30%]' >Rate sheet <span className='text-red-500 '>*</span></h3>
                    <div className='w-full'>
                        <Select className='w-full'
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                        />

                    </div>
                </div>



                <div className='bg-[#FAFBFC] '>
                    <div className='flex justify-between border-b p-5'>
                        <div className='flex gap-3 items-center'>


                            <h3 className='font-semibold'>Rate sheet 1 <span className='text-red-500'>*</span></h3>
                            <div className='text-gray-300 text-sm'>With 10 roles</div>
                        </div>

                        <button className='flex item-center text-blue-500 font-semibold gap-1 items-center'> <CheckCircle size={20} /> <div>Save members</div></button>

                    </div>

                    <div className='p-10'>
                        <div className='flex justify-between pb-3 border-b-2 '>

                            <div>
                                <h3 className='font-bold text-xl'>Full Stack Developer</h3>
                                <p className='text-gray-400 text-sm pt-2'>Internal Rate: $110/hr Billing Rate : $140/hr</p>
                            </div>

                            <div className='flex gap-2 justify-center items-center'>
                                <button><Copy size={20} /></button>

                                <button> <span>Duplicate Role</span></button>

                                <button> <MinusCircle className='text-red-500' size={20} /></button>
                            </div>

                        </div>

                        <div className='grid grid-cols-2 pt-3 gap-5'>

                            <div className=''>
                                <h3 className='font-bold pb-1'>Team Member <span className='text-red-500'>*</span></h3>

                                <div className='flex mt-1'>


                                    <Select
                                        placeholder={<div className='flex gap-2 justify-start'>
                                            <UserCircle size={20} /> <span>Select</span>
                                        </div>}
                                        defaultValue={selectedOption}
                                        onChange={setSelectedOption}
                                        options={options}
                                        className='w-[80%] text-start'
                                    />
                                </div>

                            </div>
                            <div className=''>
                                <h3 className='font-bold pb-1'>Work Type <span className='text-red-500'>*</span></h3>

                                <div className='flex mt-1'>


                                    <Select
                                        placeholder={<div className='flex gap-2 justify-start'>
                                           <span>Select</span>
                                        </div>}
                                        defaultValue={selectedOption}
                                        onChange={setSelectedOption}
                                        options={options}
                                        className='w-[80%] text-start'
                                    />
                                </div>

                            </div>

                            <div className=''>
                                <h3 className='font-bold pb-1'>Start Date <span className='text-red-500'>*</span></h3>

                                <div className=' w-[80%]  bg-white flex items-center py-[6px] gap-2 border border-gray-300 rounded p-1 '>
                                    <CalendarBlank size={20} />
                                    <DatePicker
                                        className='focus:outline-none focus:border-none bg-white w-[30px]'
                                        placeholderText={`Pick a start date`}
                                        selected={startDate} onChange={(date: any) => {
                                            return setStartDate(prev => date)
                                        }} />

                                </div>

                            </div>
                            <div className=''>
                                <h3 className='font-bold pb-1'>End date</h3>

                                <div className='  bg-white w-[80%] flex items-center py-[6px] gap-2 border border-gray-300 rounded p-1 '>
                                    <CalendarBlank size={20} />
                                    <DatePicker
                                        className='focus:outline-none focus:border-none'
                                        placeholderText={`Pick an end date`}
                                        selected={startDate} onChange={(date: any) => {
                                            return setStartDate(prev => date)
                                        }} />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>




        </div>
    )
}

export default Update