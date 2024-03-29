'use client'
import { PlusCircle, Trash, Warning, X } from '@phosphor-icons/react'
import React, { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import CvaButton from '../UI/CvaButton'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './AddMember.css'

type Props = {
    setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>,
    isFormOpen: boolean

}

const AddMemberForm = ({ setIsFormOpen, isFormOpen }: Props) => {



    const memberSchema = z.object({
        name: z.string().nonempty({ message: 'Member name is required' }),
        email: z.string().nonempty({ message: 'Email address is required' }).email({ message: 'this input should be an email' }),
        phone: z.string()
    })

    const schema = z.object({
        members: z.array(memberSchema)
    })

    const { control, register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            members: [{ name: '', email: '', phone: '' }]
        },
        resolver: zodResolver(schema)
    });


    const { fields, append, remove } = useFieldArray({
        control,
        name: 'members' // Name of your array field
    });

    const onSubmit = (data: any) => {
        console.log(data);

    }


    console.log('errors', errors);



    return (
        <div className='relative  border max-w-lg h-screen overflow-y-auto '>
            <div className='bg-gray-100 bg-opacity-50 px-5 py-7'>




                <button onClick={() => setIsFormOpen(!isFormOpen)} className='absolute top-5 right-5 text-gray-400'>
                    <X weight="bold" size={18} /></button>
                <h3 className='text-2xl font-bold text-gray-700'>Add Member Profile</h3>
                <p className='text-gray-400 font-medium text-sm pt-1' >Get started by filling in the information to create new member</p>
            </div>

            <form className='h-full flex flex-col justify-between p-5' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    {fields.map((item, index) => (
                        <div key={item.id} className="bg-gray-100 my-3 bg-opacity-50 p-4 rounded-md flex flex-col">
                            <div className="flex items-start space-x-3 pb-3">

                                <label className="w-1/3 pt-1" htmlFor={`members.${index}.name`}>Member Name <span className="text-red-500">*</span>
                                </label>

                                <div className='w-2/3 flex flex-col'>

                                    <div className=" flex items-center space-x-3">
                                        <input
                                            type="text"
                                            className={clsx(
                                                'flex-grow bg-white rounded-md border focus:outline-none px-2 text-sm py-1',
                                                { 'border-red-500': errors && errors?.members && errors?.members[index] && errors?.members[index].name })}

                                            {...register(`members.${index}.name`)}
                                            defaultValue={item.name}
                                        />


                                        {index > 0 && (
                                            <button type="button" onClick={() => remove(index)}>
                                                <Trash size={20} className='text-red-500' weight="bold" />
                                            </button>
                                        )}


                                    </div>

                                    {errors && errors.members && errors.members[index] && errors.members[index].name &&
                                        (
                                            <span className="text-red-500 text-xs pt-1 flex gap-1 font-bold">
                                                <Warning size={14} weight="bold" /> <span>  {errors.members[index].name.message}</span>
                                            </span>
                                        )}
                                </div>
                            </div>
                            <div className="flex items-start space-x-3 pb-3">

                                <label className="w-1/3 pt-1" htmlFor={`members.${index}.name`}>Email Address<span className="text-red-500">*</span>
                                </label>

                                <div className='w-2/3 flex flex-col'>

                                    <div className=" flex items-center space-x-3">
                                        <input
                                            type="text"
                                            className={clsx(
                                                'flex-grow bg-white rounded-md border focus:outline-none px-2 text-sm py-1',
                                                { 'border-red-500': errors && errors?.members && errors?.members[index] && errors?.members[index].email })}

                                            {...register(`members.${index}.email`)}
                                            defaultValue={item.email}
                                        />





                                    </div>

                                    {errors && errors.members && errors.members[index] && errors.members[index].email &&
                                        (
                                            <span className="text-red-500 text-xs pt-1 flex gap-1 font-bold">
                                                <Warning size={14} weight="bold" /> <span>
                                                    {errors.members[index].email.message}
                                                </span>
                                            </span>
                                        )}
                                </div>
                            </div>
                            <div className="flex items-start space-x-3 pb-3">

                                <label className="w-1/3 pt-1" htmlFor={`members.${index}.name`}>
                                    Phone Number
                                </label>

                                <div className='w-2/3 flex flex-col'>

                                    <div className=" flex items-center space-x-3">
                                        <div className=''>

                                            <PhoneInput
                                                inputClass={clsx(
                                                    'flex-grow bg-white rounded-md border focus:outline-none px-2 text-sm py-1 w-[200px]',
                                                    { 'border-red-500': errors && errors?.members && errors?.members[index] && errors?.members[index].phone }
                                                )}
                                                inputStyle={{ width: '300px' }}
                                                inputProps={{
                                                    name: `members.${index}.phone`,
                                                    autoFocus: true
                                                }}
                                                value={item.phone}
                                     

                                                onChange={(e)=> console.log(e?.target?.value)
                                                }

                                                
                                                countryCodeEditable={false}

                                            />

                                        </div>



                                        {index > 0 && (
                                            <button type="button" onClick={() => remove(index)}>
                                                <Trash size={20} className='text-red-500' weight="bold" />
                                            </button>
                                        )}


                                    </div>

                                    {errors && errors.members && errors.members[index] && errors.members[index].email &&
                                        (
                                            <span className="text-red-500 text-xs pt-1 flex gap-1 font-bold">
                                                <Warning size={14} weight="bold" /> <span>
                                                    {errors.members[index].email.message}
                                                </span>
                                            </span>
                                        )}
                                </div>
                            </div>

                        </div>
                    ))}
                    <button type='button' className="button text-gray-600 flex items-center justify-center gap-2"
                        onClick={() => append({ name: '', email: '', phone: '' })}>
                        <PlusCircle size={20} weight="bold" />
                        <span>  Add More </span>
                    </button>

                </div>
                <div className='flex gap-2 justify-end'>
                    <CvaButton onClick={() => {
                        reset();
                        setIsFormOpen(!isFormOpen)
                    }}
                        type="reset" className='' intent='secondary' size={'medium'} animate> Cancel</CvaButton>

                    <CvaButton type="submit" className='' intent='primary' size={'medium'} animate> Create </CvaButton>

                </div>
            </form>

        </div>
    )
}

export default AddMemberForm