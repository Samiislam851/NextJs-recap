import { CalendarBlank, CheckCircle, Copy, MinusCircle, UserCircle, UserCirclePlus } from '@phosphor-icons/react'
import React, { useEffect, useState } from 'react'
import Select, { components, ControlProps } from 'react-select'
import DatePicker from "react-datepicker";
import AsyncSelect from 'react-select/async';
import useAxiosConfig from '@/utils/axiosConfig';
import { Role } from '@/utils/rateSheetDataType';
import { AssignedEmployee } from '@/utils/productEmployeesType';

type Props = {
    role: Role,
    assignedEmployees: AssignedEmployee[] | null,
    setAssignedEmployees: React.Dispatch<React.SetStateAction<AssignedEmployee[] | null>>,
    saveBool: boolean,
    idx: number
}

const RateSheetInputFields = (props: Props) => {

    const { role, saveBool, assignedEmployees, idx, setAssignedEmployees } = props;


    const clientAxios = useAxiosConfig()


    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const Control = ({ children, ...props }: ControlProps<any, boolean, any>) => (
        <components.Control {...props}>
            <UserCircle size={20} className='ms-1 text-gray-800' /> {children}
        </components.Control>
    );

    const workTypeOptions = [
        { value: 'PART_TIME', label: 'Part Time' },
        { value: 'FULL_TIME', label: 'Full Time' },

    ];



    const loadOptionsTeamMember = async () => {
        const response = await clientAxios(`/employee/list/active/roleId?roleId=${props.role._id}`);
        console.log('res', response.data)
        return response.data.map((option: any) => ({ value: option._id, label: option.name }))
    };




    const handleSelectOfTeamMember = async (selectedOption: any) => {
        setAssignedEmployees((prev) => {
            if (!prev) {
                return prev;
            }
            return prev.map((assignedEmployee) => {
                if (assignedEmployee.employeeRoleId === role._id) {
                    return { ...assignedEmployee, employeeId: selectedOption.value };
                } else {
                    return assignedEmployee;
                }
            });
        });
    };


    const handleSelectOfJobType = async (selectedOption: any) => {



        setAssignedEmployees((prev) => {
            if (!prev) {
                return prev;
            }
            return prev.map((assignedEmployee) => {
                if (assignedEmployee.employeeRoleId === role._id) {
                    return { ...assignedEmployee, employmentStatus: selectedOption.value };
                } else {
                    return assignedEmployee;
                }
            });
        });
    };

    const handleStartDateChange = async (date: Date) => {
        setStartDate(date)
        const formattedStartDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
            .toISOString()
            .replace('T', ' ')
            .replace(/\.\d{3}Z$/, '.000Z');


        setAssignedEmployees((prev) => {
            if (!prev) {
                return prev;
            }
            return prev.map((assignedEmployee) => {
                if (assignedEmployee.employeeRoleId === role._id) {
                    return { ...assignedEmployee, startDate: formattedStartDate };
                } else {
                    return assignedEmployee;
                }
            });
        });
    };

    const handleEndDateChange = (date: Date) => {
        setEndDate(date)
        const formattedEndDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
            .toISOString()
            .replace('T', ' ')
            .replace(/\.\d{3}Z$/, '.000Z');
        setAssignedEmployees((prev) => {
            if (!prev) {
                return prev;
            }
            return prev.map((assignedEmployee) => {
                if (assignedEmployee.employeeRoleId === role._id) {
                    return { ...assignedEmployee, endDate: formattedEndDate };
                } else {
                    return assignedEmployee;
                }
            });
        });
    };






    return (
        <div className='grid grid-cols-2 pt-3 gap-5'>

            <div className=''>
                <h3 className='font-bold pb-1'>Team Member <span className='text-red-500'>*</span></h3>

                <div className='flex flex-col mt-1'>

                    <AsyncSelect
                        {...props}
                        components={{ Control }}
                        className='w-[80%] text-start'
                        loadOptions={loadOptionsTeamMember}
                        onChange={handleSelectOfTeamMember}
                        defaultOptions
                    // defaultValue={selectedOption}
                    />



                    {assignedEmployees ? <>

                        {saveBool && assignedEmployees[idx].employeeId === '' ? <div className='text-red-500'>Team member is required</div> : null}

                    </> : null}



                </div>

            </div>
            <div className=''>
                <h3 className='font-bold pb-1'>Work Type <span className='text-red-500'>*</span></h3>

                <div className='flex flex-col gap-1 mt-1'>

                    <Select
                        placeholder={<div className='flex gap-2 justify-start'>
                            <span>Select</span>
                        </div>}

                        onChange={handleSelectOfJobType}

                        options={workTypeOptions}

                        className='w-[80%] text-start'
                    />


                    {assignedEmployees ? <>

                        {saveBool && assignedEmployees[idx].employmentStatus === '' ? <div className='text-red-500'>Work type is required</div> : null}

                    </> : null}

                </div>
            </div>

            <div className=''>
                <h3 className='font-bold pb-1'>Start Date <span className='text-red-500'>*</span></h3>
                <div className='flex flex-col'>
                    <div className=' w-[80%]  bg-white flex items-center py-[6px] gap-2 border border-gray-300 rounded p-1 '>
                        <CalendarBlank size={20} />
                        <DatePicker
                            className='focus:outline-none focus:border-none bg-white w-[300px]'
                            placeholderText={`Pick a start date`}
                            selected={startDate}
                            onChange={handleStartDateChange} />



                    </div>
                    {assignedEmployees ? <>

                        {saveBool && assignedEmployees[idx].startDate === '' ? <div className='text-red-500'>Start Date is required</div> : null}

                    </> : null}

                </div>


            </div>
            <div className=''>
                <h3 className='font-bold pb-1'>End date</h3>

                <div className='  bg-white w-[80%] flex items-center py-[6px] gap-2 border border-gray-300 rounded p-1 '>
                    <CalendarBlank size={20} />
                    <DatePicker
                        className='focus:outline-none focus:border-none'
                        placeholderText={`Pick an end date`}
                        selected={endDate}
                        onChange={handleEndDateChange} />

                </div>

            </div>

        </div>
    )
}

export default RateSheetInputFields