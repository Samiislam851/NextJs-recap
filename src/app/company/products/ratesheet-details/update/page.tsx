'use client'
import { CalendarBlank, CheckCircle, Copy, MinusCircle, UserCircle, UserCirclePlus } from '@phosphor-icons/react'
import React, { useEffect, useState } from 'react'
import Select, { components, ControlProps } from 'react-select'
import './update.css'
//@ts-ignore
import "react-datepicker/dist/react-datepicker.css";
import useAxiosConfig from '@/utils/axiosConfig'
import AsyncSelect from 'react-select/async';
import { RateSheetDataType, TeamStructure } from '@/utils/rateSheetDataType'
import RateSheetInputFields from '@/components/RateSheetInputFields/RateSheetInputFields'
import { AssignedEmployee } from '@/utils/productEmployeesType'

type Props = {}

const Update = (props: Props) => {

    const [assignedEmployees, setAssignedEmployees] = useState<AssignedEmployee[] | null>(null);

    const [savedMember, setSavedMember] = useState<string>('not saved');

    const [selectedSheet, setSelectedSheet] = useState<RateSheetDataType | null>(null);

    const clientAxios = useAxiosConfig()

    const loadOptions = async () => {
        const response = await clientAxios.get('/rate-sheet/list/dropdown')
        return response.data.data.map((option: any) => ({ value: option._id, label: option.name }))
    };



    const handleSelectOfRateSheet = async (selectedOption: any) => {
        console.log('selected option....... ', selectedOption);


        try {
            const response = await clientAxios.get(`/rate-sheet/details/${selectedOption.value}`)
            console.log(response.data);
            setSavedMember('not saved')
            setSelectedSheet(response.data)


            setAssignedEmployees((prev: any) => {
                console.log(prev);

                const preparedArray = response.data.teamStructures.map((teamStructure: TeamStructure) => {
                    return {
                        teamRateId: teamStructure?.role._id,
                        employeeRoleId: teamStructure?.employeeRoleId,
                        employeeId: "",
                        employmentStatus: "",
                        internalRate: teamStructure?.internalRate,
                        billRate: teamStructure?.billRate,
                        startDate: "",
                        endDate: ""
                    }
                })
                return preparedArray
            }
            )


        } catch (error) {
            console.log('error = ', error);
        }

    }

    console.log('the assignedEmployees===>>>>>>>>>>  ', assignedEmployees);

    const handleDeleteRole = (id: string) => {
        setSelectedSheet(prev => {
            if (!prev) return prev;
            const newRoles = prev?.teamStructures.filter(role => role._id !== id)
            return {
                ...prev,
                teamStructures: newRoles
            }
        })
    }


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
                    <h3 className='basis-[30%] pt-1' >Rate sheet <span className='text-red-500 '>*</span></h3>
                    <div className='w-full'>

                        <AsyncSelect
                            className='w-full'
                            loadOptions={loadOptions}
                            onChange={handleSelectOfRateSheet}
                            defaultOptions
                        />

                    </div>
                </div>


                {selectedSheet ?
                    <div className='bg-[#FAFBFC] '>
                        <div className='flex justify-between border-b p-5'>
                            <div className='flex gap-3 items-center'>
                                <h3 className='font-semibold'>{selectedSheet.name}<span className='text-red-500'>*</span></h3>
                                <div className='text-gray-300 text-sm'>With {selectedSheet.teamStructures.length} roles</div>
                            </div>


                            {savedMember === 'not saved' &&
                                <button
                                    onClick={() => setSavedMember('assigning')}
                                    className='flex item-center text-blue-500 font-semibold gap-1 items-center'> <UserCirclePlus size={16} /> <div> Assign Member </div>
                                </button>}



                            {savedMember === 'assigning' &&
                                <button
                                    onClick={() => setSavedMember('saved')}
                                    className='flex item-center text-blue-500 font-semibold gap-1 items-center'>
                                    <CheckCircle size={20} /> <div> Save Member </div>
                                </button>}

                            {savedMember === 'saved' &&
                                <button
                                    onClick={() => setSavedMember('assigning')}

                                    className='flex item-center text-blue-500 font-semibold gap-1 items-center'> <UserCirclePlus size={16} /> <div> Change Member </div></button>}









                        </div>
                        {savedMember === 'assigning' &&
                            <>
                                {
                                    selectedSheet.teamStructures.map(teamStructure =>
                                        <div key={teamStructure._id} className='p-10'>
                                            <div className='flex justify-between pb-3 border-b-2 '>
                                                <div>
                                                    <h3 className='font-bold text-xl'>{teamStructure?.role?.name}</h3>
                                                    <p className='text-gray-400 text-sm pt-2'>Internal Rate: ${teamStructure.internalRate}/hr

                                                        Billing Rate : ${teamStructure.billRate}/hr</p>
                                                </div>

                                                <div className='flex gap-2 justify-center items-center'>
                                                    <button className='flex gap-1 items-center justify-center'>
                                                        <Copy size={20} /> <span>Duplicate Role</span>
                                                    </button>

                                                    <button onClick={() => handleDeleteRole(teamStructure._id)}> <MinusCircle className='text-red-500' size={20} /></button>
                                                </div>

                                            </div>
                                            {/* input fields */}
                                            <RateSheetInputFields setAssignedEmployees={setAssignedEmployees} assignedEmployees={assignedEmployees} role={teamStructure.role} />
                                        </div>)
                                }
                            </>
                        }



                    </div>
                    :
                    <div>
                        please  select first
                    </div>

                }


            </div>




        </div>
    )
}

export default Update