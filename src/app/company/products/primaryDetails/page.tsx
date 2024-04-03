'use client'

import CvaButton from '@/components/UI/CvaButton'
import { AddressBook, Calendar, PencilSimpleLine } from '@phosphor-icons/react'
import Link from 'next/link'
import React from 'react'
import { RxCaretRight } from 'react-icons/rx'

type Props = {}

const page = (props: Props) => {
    return (
        <div className='text-gray-700'>
            <div className='flex justify-between p-7'>
                <div className='space-y-2'>
                    <div className='flex gap-2 text-gray-400 text-sm font-semibold'>
                        <Link href={'/company/products'}>Products</Link>
                        <RxCaretRight className='text-2xl' />
                        <div className='text-blue-500 cursor-pointer'>Details</div>



                    </div>
                    <div>
                        <h2 className='text-3xl font-semibold text-gray-700'>Smart Solutions Details</h2>
                    </div>

                </div>
                <div>
                    <div className='w-10 h-10 rounded-full bg-gray-200 bg-opacity-30 text-gray-400 text-center py-2'>EM</div>

                </div>
            </div>

            <div className='mx-auto max-w-[35rem] '>
                {/* Product details */}

                <div className=' text-sm'>
                    <div className='flex justify-between'>
                        <div >
                            <h3 className='text-xl font-semibold'>Product Details</h3>
                        </div>

                        <div>
                            <CvaButton intent='plain' size='medium' animate  ><span className='flex gap-2'>

                                <PencilSimpleLine size={16} />  Edit</span>
                            </CvaButton>
                        </div>

                    </div>

                    <div className='text-start py-7'>
                        <div className='flex pb-5 '>
                            <div className='basis-[17%] text-gray-500'>Name</div>
                            <div className='basis-[80%] flex gap-2'>
                                <span>:</span>
                                <span>Smart Solutions</span> </div>
                        </div>
                        <div className='flex'>
                            <div className='basis-[17%] text-gray-500'>Description</div>
                            <div className='basis-[80%] flex gap-2'>
                                <span>:</span>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi laboriosam veritatis explicabo exercitationem quia repudiandae asperiores modi ut eveniet nostrum expedita dolore placeat perferendis reiciendis animi cum officiis commodi odio dolor, quas magni. Dolores, ab.</span>

                            </div>
                        </div>


                    </div>


                </div>





                {/* Legal Documents */}
                <div>
                    <div className='flex justify-between'>
                        <div >
                            <h3 className='text-xl font-semibold'>Legal Documents</h3>
                        </div>

                        <div>
                            <CvaButton animate intent='plain' size='medium' plusIcon={true} >
                                Add new
                            </CvaButton>
                        </div>

                    </div>

                    <div className='text-start  rounded-lg my-5 bg-[#F8F9FB] text-sm'>
                        <div className='flex p-5 '>
                            <div className='basis-[23%] text-gray-500'>Contract Name</div>
                            <div className='basis-[77%] flex gap-2'>
                                <span>:</span>
                                <span>Smart Solutions Development <span className='bg-gray-800 text-xs text-white px-[6px] py-[2px] rounded'>Draft</span></span> </div>
                        </div>
                        <div className='flex items-center px-5'>
                            <div className='basis-[23%] text-gray-500'>Start - End Date</div>
                            <div className='basis-[77%] flex gap-2 items-center'>
                                <span>:</span>
                                <span className='bg-[#EFEFF1] rounded-md px-3 py-1 flex items-center gap-1 '>
                                    <Calendar size={20} />
                                    <span> 1 sep 2023 - 1 sep 2025</span>
                                </span>

                            </div>
                        </div>



                        <div className='flex justify-end gap-6 font-bold border-t border-t-gray-300 mt-3 p-4'>
                            <div>
                                <button>History</button>
                            </div>
                            <div>
                                <button className='text-blue-500'>Details</button>
                            </div>

                        </div>


                    </div>


                </div>
                {/* Rate sheets */}
                <div>
                    <div className='flex justify-between'>
                        <div >
                            <h3 className='text-xl font-semibold'>Rate Sheets</h3>
                        </div>



                    </div>

                    <div className='text-start  rounded-lg my-5 bg-[#F8F9FB] text-sm'>
                        <div className='flex p-5 '>
                            <div className='basis-[23%] text-gray-500'>Rates Sheet</div>
                            <div className='basis-[77%] flex gap-2'>
                                <span>:</span>
                                <span>
                                    Rates 1 sheet

                                    <span className='bg-blue-100 bg-opacity-50 text-xs text-blue-500 ms-2 px-[6px] py-[2px] rounded'>
                                        -10% Discount
                                    </span>

                                </span> </div>
                        </div>
                        <div className='flex items-center px-5'>
                            <div className='basis-[23%] text-gray-500'>Start Date</div>
                            <div className='basis-[77%] flex items-center'>

                                <div className='flex gap-2 items-center'>
                                    <span>:</span>
                                    <span className='bg-[#EFEFF1] rounded-md px-3 py-1 flex items-center gap-1 '>
                                        <Calendar size={20} />
                                        <span> 1 sep 2023 </span>
                                    </span>
                                </div>
                                <div className='flex items-center px-5'>
                                    <div className='flex-grow text-gray-500'>Total Roles</div>
                                    <div className='flex gap-2 items-center'>
                                        <span>:</span>
                                        <span className='bg-[#EFEFF1] rounded-md px-3 py-1 flex items-center gap-1 '>
                                            <AddressBook size={20} />
                                            <span>    8    </span>
                                        </span>

                                    </div>
                                </div>

                            </div>
                        </div>



                        <div className='flex justify-end gap-6 font-bold border-t border-t-gray-300 mt-3 p-4'>
                            <div>
                                <button>History</button>
                            </div>
                            <div>
                                <button className='text-blue-500'>Details</button>
                            </div>

                        </div>


                    </div>


                </div>







            </div>






        </div>
    )
}

export default page