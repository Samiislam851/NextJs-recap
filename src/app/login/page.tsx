'use client'

import { userLoggedIn } from '@/features/userSlice'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { z } from 'zod'


type Props = {}

type FormData = {
    email: string;
    password: string;
}


const page = (props: Props) => {

    const router = useRouter()
    const [showPassword, setShowPassword] = useState<boolean>(false);



    const schema = z.object({
        email: z.string()
            .nonempty({ message: "email can't be empty" })
            .email({ message: 'invalid email address' }),


        password: z.string()
            .nonempty({ message: "Password can't be empty" })
            .min(6, { message: 'Password must be at least 6 characters' })
            .includes('@', { message: 'Password must include an @' })

    })


    const dispatch = useDispatch()


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };



    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
    });




    const mutation = useMutation<void, unknown, FormData, unknown>(

        {
            mutationFn: (data) => {

                const authName = "65d6e54dd2d038abc102b4b2";
                const authPass = "897cf996-ec96-4707-9c4d-2f25d64565be";
                const base64Credentials = btoa(authName + ':' + authPass);
                console.log('sending data', data);

                return axios.post('http://192.168.0.168:5000/auth/sign-in', data, {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': `Basic ${base64Credentials}`
                    }
                })
            }
        }
    )








    //////// User state checking 

    const userState = localStorage.getItem('basic-login')

    console.log(userState);



    useEffect(() => {
        if (userState) {
            router.push('/company')
        }
    }, [userState])







    console.log('mutation', mutation);





    const submitFunction = async (data: any) => {

        const bodyData = {
            email: data.email,
            password: data.password,
            grantType: 'password',
            refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTAyYmEwNDg4NjQxNzUxMDE4NmFkNmEiLCJ1c2VyVHlwZSI6ImFkbWluIiwiY2xpZW50SWQiOiI2NTAzMDdhZTNiODE0NDdlNWQ3OTM0MjUiLCJlbWFpbCI6IjZzZW5zZWV2QGdtYWlsLmNvbSIsImlhdCI6MTY5NTM1OTE3OSwiZXhwIjoxNjk1MzU5Nzc5fQ.x6tNWy3Hz1BUM_PS0jpBwSWm7RHWtNks3o-UuJCUMcI'
        }
        console.log('body data before mutation', bodyData);


        mutation.mutate(bodyData,
            {
                onSuccess: (data: any) => {

                    console.log('success data ', data);

                    localStorage.setItem('basic-login', data?.data.auth.accessToken)

                    dispatch(userLoggedIn(data.data.user))


                },
                onError: (err) => console.log(err)

            })

    }

    const { isPending } = mutation


    console.log('loading state', isPending);

    return (
        <div className=' h-[100vh] w-[100vw] flex items-center justify-center'>
            <div className='mx-3'>
                <div className='md:w-[450px] w-[fit]   mx-auto '>

                    <div className='w-fit mx-auto mb-5'>
                        <Image alt='Logo' src={'/Main_Logo_1.png'} width={200} height={100} />
                    </div>


                    <div className=' bg-[#F8F9FB]  mx-auto border-t-[#0C66E4] border-t-4  p-8 shadow-md '>

                        <div className='pb-10'>
                            <h2 className='text-3xl  font-bold text-gray-800'>Login</h2>
                            <p className='text-gray-500'>Continue with pattern50</p>
                        </div>


                        <form onSubmit={handleSubmit(submitFunction)} className="w-full ">
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                                <input
                                    type=""
                                    id="email"
                                    {...register('email'

                                    )}

                                    placeholder='Email address'
                                    className={`input-text border rounded-md px-3 py-2 w-full`}
                                />
                                {errors.email ?
                                    <p className='text-red-500 text-sm italic ps-3'>{errors.email.message}</p>
                                    :
                                    <>

                                    </>}

                            </div>

                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        {...register('password',



                                        )}
                                        placeholder='Password'
                                        className={`input-text border rounded-md px-3 py-2 w-full pr-10`}
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                                {errors.password ?
                                    <p className='text-red-500 text-sm italic ps-3'>{errors.password.message}</p>
                                    : <>

                                    </>}

                            </div>








                            <div className=' my-3 text-right mb-10'>
                                <Link className='underline font-medium text-blue-500' href={'/forgot-password'}> Forgot Password? </Link>
                            </div>


                            <button type="submit" className="btn bg-blue-500 text-white py-1 px-4 rounded-md w-full text-center"> {!isPending ? <span>Login</span> :
                                <div className='w-fit mx-auto'>   <AiOutlineLoading3Quarters className='animate-spin text-2xl text-gray-300' /> </div>

                            }</button>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default page