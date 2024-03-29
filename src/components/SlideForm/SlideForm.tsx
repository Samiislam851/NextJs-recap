'use client'
import { PlusCircle, Trash, X } from '@phosphor-icons/react'
import React, { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import CvaButton from '../UI/CvaButton'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

type Props = {
    setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>,
    isFormOpen: boolean

}

const SlideForm = ({ setIsFormOpen, isFormOpen }: Props) => {



    const roleSchema = z.object({
        name: z.string().min(3).max(40).nonempty(),
        details: z.string().max(250)
    })

    const schema = z.object({
        roles: z.array(roleSchema)
    })

    const { control, register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            roles: [{ name: '', details: '' }]
        },
        resolver: zodResolver(schema)
    });


    const { fields, append, remove } = useFieldArray({
        control,
        name: 'roles' // Name of your array field
    });

    const onSubmit = (data: any) => {
        console.log(data);

    }


    console.log('errors', errors);



    return (
        <div className='relative  border max-w-lg h-screen overflow-y-auto p-5'>

            <button onClick={() => setIsFormOpen(!isFormOpen)} className='absolute top-5 right-5 text-gray-400'>
                <X weight="bold" size={18} /></button>
            <h3 className='text-2xl font-bold text-gray-700'>Add Role Profile</h3>
            <p className='text-gray-400 font-medium text-sm pt-1' >Get started by filling in the information to create new role profile</p>



            <form className='h-full flex flex-col justify-between' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    {fields.map((item, index) => (
                        <div key={item.id} className="bg-gray-100 my-3 bg-opacity-50 p-4 rounded-md flex flex-col">
                            <div className="flex items-center space-x-3 pb-3">

                                <label className="w-1/3" htmlFor={`roles.${index}.name`}>Role Name <span className="text-red-500">*</span></label>
                                <div className="w-2/3 flex items-center space-x-3">
                                    <input
                                        type="text"
                                        className="flex-grow bg-white rounded-md border focus:border-gray-400 focus:outline-none"
                                        {...register(`roles.${index}.name`)}
                                        defaultValue={item.name}
                                    />


                                    {index > 0 && (
                                        <button type="button" onClick={() => remove(index)}>
                                            <Trash size={20} className='text-red-500' weight="bold" />
                                        </button>
                                    )}
                                </div>
                            </div>


                            {/* @ts-ignore */}
                            {errors.roles && errors.roles[index] && errors.roles[index].name &&
                                (
                                    <span className="text-red-500 text-xs">
                                        {/* @ts-ignore */}
                                        {errors.roles[index].name.message}</span>
                                )}


                            <div className="flex items-center space-x-3">
                                <div className="w-1/3">Role Details </div>
                                <div className="w-2/3">
                                    <input
                                        className="w-full bg-white rounded-md border focus:border-gray-400 focus:outline-none h-20"
                                        {...register(`roles.${index}.details`)}
                                        defaultValue={item.details}
                                    />

                                    <p className="text-xs pt-2 text-gray-500">Keep role details under 250 characters</p>
                                </div>
                            </div>
                            {/* @ts-ignore */}
                            {errors.roles && errors.roles[index] && errors.roles[index].details && (
                                <span className="text-red-500 text-xs">
                                    {/* @ts-ignore */}
                                    {errors.roles[index].details.message}</span>
                            )}
                        </div>
                    ))}
                    <button type='button' className="button text-gray-600 flex items-center justify-center gap-2"
                        onClick={() => append({ name: '', details: '' })}>
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

export default SlideForm