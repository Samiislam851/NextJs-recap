'use client'
import axios from 'axios';
import React from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';


type Props = {}

const page = (props: Props) => {


    const options = [
        { value: 'ned-stark', label: 'Eddard "Ned" Stark' },
        { value: 'catelyn-stark', label: 'Catelyn Stark' },
        { value: 'robb-stark', label: 'Robb Stark' },
        { value: 'sansa-stark', label: 'Sansa Stark' },
        { value: 'arya-stark', label: 'Arya Stark' },
        { value: 'tony-stark', label: 'Tony Stark :)' },
        { value: 'bran-stark', label: 'Bran Stark' },
        { value: 'rickon-stark', label: 'Rickon Stark' },
        { value: 'jon-snow', label: 'Jon Snow' },
    ];
    const handleSelectChange = (selectedOption: any) => {
        console.log(selectedOption);

    }
    const handleSelectChange2 = (selectedOption: any) => {
        console.log(selectedOption);

    }


    const loadOptions = async (inputValue: any) => {
        console.log(inputValue);

        const token = localStorage.getItem('basic-login')

        const response = await axios.get(`http://192.168.0.168:5000/company/list?page=${1}&size=${15}&query=${inputValue}`, {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        return response.data.data.map((option: any) => ({ value: option.name, label: option.name }))
        // .options.map((option: any) => );
    };





    return (
        <div>


            <h3 className='text-2xl font-medium text-center m-10' >React select practice </h3>

            <Select
                className='max-w-md mx-auto mb-10'
                options={options}
                onChange={handleSelectChange}
                // isMulti
                placeholder={'select the intruder'}
            />

            <AsyncSelect
                className='max-w-md mx-auto'
                loadOptions={loadOptions}
                onChange={handleSelectChange2}
                isMulti
                placeholder='Select a company'
                defaultOptions
            />

        </div>
    )
}

export default page