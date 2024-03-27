'use client'
import React, { ReactNode } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { globalAxios } from '@/utils/axiosConfigs';

type Props = {
    children: ReactNode
}





const QueryProvider = ({ children }: Props) => {


   

    globalAxios.interceptors.request.use((request) => {

        request.headers.Authorization = 'Bearer Siam...............'


        console.log('axios request', request);

        return request
    })



    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>


    )
}

export default QueryProvider