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
    assignedEmployees: AssignedEmployee | null
}

const RateSheetInputFields = (props: Props) => {

    const { assignedEmployees } = props;


    const clientAxios = useAxiosConfig()

    const [startDate, setStartDate] = useState(null);
    const [startDate2, setStartDate2] = useState(null);

    const Control = ({ children, ...props }: ControlProps<any, boolean, any>) => (
        <components.Control {...props}>
            <UserCircle size={20} className='ms-1 text-gray-800' /> {children}
        </components.Control>
    );

    const workTypeOptions = [
        { value: 'part-time', label: 'Part Time' },
        { value: 'full-time', label: 'Full Time' },

    ];

    const [selectedOption, setSelectedOption] = useState<{ value: string, label: string } | null>(null);

    const loadOptionsTeamMember = async () => {
        const response = await clientAxios(`/employee/list/active/roleId?roleId=${props.role._id}`);
        console.log('res', response.data)
        return response.data.map((option: any) => ({ value: option._id, label: option.name }))
    };

    const handleSelectOfTeamMember = async (selectedOption: any) => {
        console.log('selected option....... ', selectedOption);

    }

    return (
        <div className='grid grid-cols-2 pt-3 gap-5'>

            <div className=''>
                <h3 className='font-bold pb-1'>Team Member <span className='text-red-500'>*</span></h3>

                <div className='flex mt-1'>

                    <AsyncSelect
                        {...props}
                        components={{ Control }}
                        className='w-[80%] text-start'
                        loadOptions={loadOptionsTeamMember}
                        onChange={handleSelectOfTeamMember}
                        defaultOptions
                    // defaultValue={selectedOption}
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

                        options={workTypeOptions}

                        className='w-[80%] text-start'
                    />
                </div>

            </div>

            <div className=''>
                <h3 className='font-bold pb-1'>Start Date <span className='text-red-500'>*</span></h3>

                <div className=' w-[80%]  bg-white flex items-center py-[6px] gap-2 border border-gray-300 rounded p-1 '>
                    <CalendarBlank size={20} />
                    <DatePicker
                        className='focus:outline-none focus:border-none bg-white w-[300px]'
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
                        selected={startDate2} onChange={(date: any) => {
                            return setStartDate2(prev => date)
                        }} />

                </div>

            </div>

        </div>
    )
}

export default RateSheetInputFields