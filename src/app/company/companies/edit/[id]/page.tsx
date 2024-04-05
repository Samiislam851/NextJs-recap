'use client'
import useAxiosConfig from '@/utils/axiosConfig';
import { CalendarBlank, X } from '@phosphor-icons/react';
import { useQuery } from '@tanstack/react-query';
import { Controller, useForm } from 'react-hook-form';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import CvaButton from '@/components/UI/CvaButton';
import clsx from 'clsx';


type Props = {};

const Page = (props: Props) => {
    const { id } = useParams();

    const clientAxios = useAxiosConfig();

    const { data, isError, isFetching, refetch } = useQuery({
        queryKey: ['user'],
        queryFn: () => {
            return clientAxios.get(`company/${id}`);
        },
    });

    const citySchema = z.object({
        value: z.string(),
        label: z.string(),
    });

    const stateSchema = z.object({
        value: z.string(),
        label: z.string(),
    });

    const countrySchema = z.object({
        value: z.string(),
        label: z.string(),
    });



    const schema = z.object({
        companyName: z.string().nonempty('Company Name is required'),
        email: z.string().email('Invalid email format').nonempty('Email Address is required'),
        EIN: z.string().nonempty('EIN is required'),
        addressLine: z.string().nonempty('Address is required'),
        zipCode: z.string().nonempty('ZIP Code is required'),
        city: citySchema.nullable(),
        state: stateSchema.nullable(),
        country: countrySchema.nullable(),
        masterEmail: z.string().email('Invalid email format').nonempty('Master Email is required'),
        startMonth: z.union([z.string(), z.date()]),
        endMonth: z.union([z.string().nullable(), z.date().nullable()]),
    });


    const { handleSubmit, control, setValue, reset, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });





    console.log(data);
    console.log('errors.....', errors);


    const onSubmit = (formData: any) => {

        console.log('form data.....', formData);
    };

    useEffect(() => {
        if (data?.data) {
            setValue('country', { value: data?.data?.address?.country, label: data?.data?.address?.country }, { shouldValidate: true })
            setValue('state', { value: data?.data?.address?.state, label: data?.data?.address?.state }, { shouldValidate: true })
            setValue('city', { value: data?.data?.address?.city, label: data?.data?.address?.city }, { shouldValidate: true })
        }
    }, [data?.data])

    return (
        <div className='max-w-[40rem] mx-auto pb-10'>
            <div className='py-7 px-7 flex items-center justify-between bg-[#FAFBFC] '>
                <div className=''>
                    <h3 className='text-xl text-gray-600 font-semibold'>Edit Company</h3>
                    <p className='text-gray-400'> Update and customize company profile information</p>
                </div>
                <div>
                    <X className='cursor-pointer text-gray-500' size={30} />
                </div>
            </div>
            {data && (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='p-7 text-gray-700 '>
                        <h3 className='text-xl font-semibold pb-5'> Company Information</h3>

                        <div className='flex items-start gap-7 py-5'>
                            <div className='basis-[30%] text-right pt-1 '>
                                <p> Company Name <span className='text-red-500'>*</span></p>
                            </div>
                            <div className='basis-[70%]'>
                                <Controller
                                    name='companyName'
                                    control={control}
                                    defaultValue={data?.data.name}
                                    render={({ field }) => (
                                        <input
                                            className={clsx('w-full border rounded-md  p-1 px-3',
                                                {
                                                    'border-red-500 focus:outline-red-500':
                                                        errors && errors?.companyName?.message
                                                },
                                                {
                                                    'border-gray-500 focus:outline-blue-500':
                                                        errors && !errors?.companyName?.message
                                                }


                                            )}
                                            type='text'
                                            {...field}
                                        />
                                    )}
                                />

                                {/* @ts-ignore */}
                                {errors.companyName && errors.companyName.message && <p className="text-red-500">{errors?.companyName?.message}</p>}
                            </div>
                        </div>

                        {/* Add React Select component for Email Address */}
                        <div className='flex items-start gap-7 py-5'>
                            <div className='basis-[30%] text-right'>
                                <p>Email Address<span className='text-red-500'>*</span></p>
                            </div>
                            <div className='basis-[70%]'>
                                <Controller
                                    name='email'
                                    control={control}
                                    defaultValue={data?.data.email}
                                    render={({ field }) => (
                                        <input
                                            className={clsx('w-full border rounded-md p-1 px-3', {
                                                'border-red-500 focus:outline-red-500': errors && errors?.email?.message,
                                                'border-gray-500 focus:outline-blue-500': errors && !errors?.email?.message,
                                            })}
                                            type='text'
                                            {...field}
                                        />
                                    )}
                                />
                                {/* @ts-ignore */}
                                {errors.email && errors.email.message && <p className="text-red-500">{errors?.email?.message}</p>}
                            </div>
                        </div>

                        {/* Add React Select component for Phone Number */}
                        <div className='flex items-center gap-7 py-5'>
                            <div className='basis-[30%] text-right '>
                                <p>Phone Number<span className='text-red-500'>*</span></p>
                            </div>
                            <div className='basis-[70%]'>
                                <Controller
                                    name='phone'
                                    control={control}
                                    defaultValue={data?.data.phone ?? ''}
                                    render={({ field }) => (
                                        <PhoneInput
                                            country={'us'}
                                            inputProps={{
                                                name: 'phone',
                                            }}
                                            inputClass={clsx('w-full border rounded-md focus:outline-blue-300 p-1 px-3', {
                                                'border-red-500 focus:outline-red-500': errors && errors?.phone?.message,
                                                'border-gray-500 focus:outline-blue-500': errors && !errors?.phone?.message,
                                            })}
                                            inputStyle={{ width: '100%' }}
                                            value={field.value}
                                            onChange={(value) => {
                                                setValue('phone', value);
                                            }}
                                        />
                                    )}
                                />

                                {/* @ts-ignore*/}
                                {errors.phone && errors.phone.message && <p className="text-red-500">{errors?.phone?.message}</p>}
                            </div>
                        </div>

                        <div className='flex items-start gap-7 py-5'>
                            <div className='basis-[30%] pt-1 text-right '>
                                <p>EIN<span className='text-red-500'>*</span></p>
                            </div>
                            <div className='basis-[70%]'>
                                <Controller
                                    name='EIN'
                                    control={control}
                                    defaultValue={data?.data.ein}
                                    render={({ field }) => (
                                        <input
                                            className={clsx('w-full border rounded-md focus:outline-blue-300 p-1 px-3', {
                                                'border-red-500 focus:outline-red-500': errors && errors?.EIN?.message,
                                                'border-gray-500 focus:outline-blue-500': errors && !errors?.EIN?.message,
                                            })}
                                            type='text'
                                            {...field}
                                        />
                                    )}
                                />

                                {/* @ts-ignore */}

                                {errors.EIN && errors.EIN.message && <p className="text-red-500">{errors?.EIN?.message}</p>}
                            </div>
                        </div>

                        {/* Address Line */}
                        <div className='flex items-start gap-7 py-5'>
                            <div className='basis-[30%] pt-1 text-right '>
                                <p>Address<span className='text-red-500'>*</span></p>
                            </div>
                            <div className='basis-[70%]'>
                                <Controller
                                    name='addressLine'
                                    control={control}
                                    defaultValue={data?.data.address.addressLine}
                                    render={({ field }) => (
                                        <input
                                            className={clsx('w-full border rounded-md focus:outline-blue-300 p-1 px-3', {
                                                'border-red-500 focus:outline-red-500': errors && errors?.addressLine?.message,
                                                'border-gray-500 focus:outline-blue-500': errors && !errors?.addressLine?.message,
                                            })}
                                            type='text'
                                            {...field}
                                        />
                                    )}
                                />

                                {/* @ts-ignore */}
                                {errors.addressLine && errors.addressLine.message && <p className="text-red-500">{errors?.addressLine?.message}</p>}


                                {/* ------------ */}
                                <div className='grid grid-cols-2 gap-3 pt-3'>

                                    {/* ZIP Code */}
                                    <div className=''>

                                        <div className=''>
                                            <Controller
                                                name='zipCode'
                                                control={control}
                                                defaultValue={data?.data?.address.zipCode}
                                                render={({ field }) => (
                                                    <input
                                                        className={clsx('w-full border rounded-md focus:outline-blue-300 p-1 px-3', {
                                                            'border-red-500 focus:outline-red-500': errors && errors?.zipCode?.message,
                                                            'border-gray-500 focus:outline-blue-500': errors && !errors?.zipCode?.message,
                                                        })}
                                                        type='text'
                                                        {...field}
                                                    />
                                                )}
                                            />

                                        </div>
                                    </div>

                                    {/* City */}
                                    <div className=''>

                                        <div className=''>
                                            <Controller
                                                name='city'
                                                control={control}
                                                render={({ field }) => (
                                                    <Select
                                                        options={[
                                                            { value: 'New York', label: 'New York' },
                                                            { value: 'Los Angeles', label: 'Los Angeles' },
                                                            { value: 'Chicago', label: 'Chicago' }
                                                        ]}
                                                        {...field}
                                                    />
                                                )}
                                            />
                                        </div>
                                    </div>

                                    {/* State */}
                                    <div className=''>

                                        <div className=''>
                                            <Controller
                                                name='state'
                                                control={control}
                                                render={({ field }) => (
                                                    <Select
                                                        {...field}
                                                        options={[
                                                            { value: 'NY', label: 'New York' },
                                                            { value: 'CA', label: 'California' },
                                                            { value: 'IL', label: 'Illinois' }
                                                        ]}
                                                        value={field.value ?? data?.data?.address?.state}
                                                    />
                                                )}
                                            />
                                        </div>
                                    </div>

                                    {/* Country */}
                                    <div className=''>

                                        <div className=''>
                                            <Controller
                                                name='country'
                                                control={control}
                                                render={({ field }) => (
                                                    <Select
                                                        {...field}
                                                        options={[
                                                            { value: 'US', label: 'United States' },
                                                            { value: 'CA', label: 'Canada' },
                                                            { value: 'UK', label: 'United Kingdom' }
                                                        ]}
                                                        value={field?.value ?? data?.data?.address?.country}
                                                    />
                                                )}
                                            />
                                        </div>
                                    </div>


                                </div>





                            </div>
                        </div>








                    </div>


                    {/* Master Email */}
                    <div className='flex items-start gap-7 py-5'>
                        <div className='basis-[30%] pt-1 text-right '>
                            <p>Email Address<span className='text-red-500'>*</span></p>
                        </div>
                        <div className='basis-[70%]'>
                            <Controller
                                name='masterEmail'
                                control={control}
                                defaultValue={data?.data.masterEmail}
                                render={({ field }) => (
                                    <input
                                        className={clsx('w-full border rounded-md focus:outline-blue-300 p-1 px-3', {
                                            'border-red-500 focus:outline-red-500': errors && errors?.masterEmail?.message,
                                            'border-gray-500 focus:outline-blue-500': errors && !errors?.masterEmail?.message,
                                        })}
                                        type='text'
                                        {...field}
                                    />
                                )}
                            />

                            {/* @ts-ignore */}

                            {errors.masterEmail && errors.masterEmail.message && <p className="text-red-500">{errors?.masterEmail?.message}</p>}
                        </div>
                    </div>



                    <div className='p-7 text-gray-700 '>
                        <h3 className='text-xl font-semibold pb-5'>Billing Information</h3>

                        <div className='flex items-center gap-7 py-5'>
                            <div className='basis-[30%] text-right '>
                                <p>Start Month<span className='text-red-500'>*</span></p>
                            </div>
                            <div className='basis-[70%]'>



                                <div className='flex items-center py-[2px] gap-2 border border-gray-300 rounded p-2 '>
                                    <CalendarBlank size={20} />

                                    <Controller
                                        name='startMonth'
                                        control={control}
                                        defaultValue={data?.data?.billingInfo?.startDate}
                                        render={({ field }) => (
                                            <DatePicker
                                                className='w-[310px]  rounded-md focus:outline-none p-1 px-3'

                                                selected={field.value}

                                                onChange={(date) => setValue('startMonth', date)}
                                            />
                                        )}
                                    />

                                </div>

                            </div>
                        </div>
                        <div className='flex items-center gap-7 py-5'>
                            <div className='basis-[30%] text-right '>
                                <p>End Month</p>
                            </div>
                            <div className='basis-[70%]'>

                                <div className='flex items-center py-[2px] gap-2 border border-gray-300 rounded p-2 '>
                                    <CalendarBlank size={20} />

                                    <Controller
                                        name='endMonth'
                                        control={control}
                                        defaultValue={data?.data?.billingInfo?.endDate}
                                        render={({ field }) => (
                                            <DatePicker
                                                className='w-[310px]  rounded-md focus:outline-none p-1 px-3'

                                                selected={field.value}

                                                onChange={(date) => setValue('endMonth', date)}
                                            />
                                        )}
                                    />

                                </div>



                            </div>
                        </div>
                    </div>


                    <div className='flex w-full justify-end gap-3'>
                        <div><CvaButton size='medium' type='reset' onClick={() => reset()} intent='secondary'>Cancel</CvaButton></div>
                        <div>
                            <CvaButton size='medium' type='submit' intent='primary'>Submit</CvaButton>
                        </div>

                    </div>

                </form>
            )}

        </div>
    );
};

export default Page;