'use client'
import { useQuery } from '@tanstack/react-query';
import React from 'react'

type Props = {}

const page = (props: Props) => {



    const { data, isError, isFetching } = useQuery<unknown, Error>(
        {
            queryKey: ['users'],
            queryFn: () => {
                return fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
            }
        });

    console.log(data, isError, isFetching);



    return (
        <div>page</div>
    )
}

export default page