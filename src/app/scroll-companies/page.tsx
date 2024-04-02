'use client'
import React, { useState, useRef, useCallback, useEffect } from 'react';
import useAxiosConfig from '@/utils/axiosConfig';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { SpinnerGap } from '@phosphor-icons/react';
import { DataInsidePage, Page } from '@/utils/scrollType';
import { AxiosInstance } from 'axios';
import { pages2Type } from '@/utils/pages2';






const ScrollCompanies = () => {
    const clientAxios = useAxiosConfig();
    const pageSize: number = 10;

    const [hasMore, setHasMore] = useState<boolean>(true);
    const [ref, inView] = useInView();



    const { data,
        hasNextPage,
        isFetchingNextPage, fetchNextPage } = useInfiniteQuery({

            queryKey: ['users'],
            queryFn: async ({ pageParam }) => {
                const response = await clientAxios.get(`company/list?page=${pageParam}&size=${pageSize}&query=`);
                return response.data;
            },
            getNextPageParam: (prev, page : pages2Type) => {
                return page.length + 1
            },
            initialPageParam: 1,

        });

    useEffect(() => {
        if (inView && hasNextPage) {
            if (data && data?.pages?.length * 10 < data?.pages[0].count) {
                fetchNextPage();
            } else {
                setHasMore(false)
            }
        }
    }, [inView, hasNextPage]);

    console.log('has next page', data);



    return (
        <div className='flex flex-col items-center justify-center'>
            <h3 className='text-center py-10 text-4xl font-medium'>ScrollCompanies</h3>
            <div className='max-w-md mx-auto text-center'>
                {data && data.pages.map((page: Page, i: number) => (
                    <div className='w-full' key={i}>

                        {/* <p>Page no {i + 1}</p> */}

                        {page.data.map((dataItem: DataInsidePage, index: number) => (

                            <div ref={index === page.data.length - 1 ? ref : undefined} key={dataItem._id} className={`p-5 border border-3 w-fit my-5 rounded-lg w-full bg-gray-100 `}>
                                <h3>{dataItem.name}</h3>
                                <p> {dataItem.phone} </p>
                            </div>

                        ))}
                    </div>
                ))
                }
            </div>

            {!hasMore && <div>No more data</div>}
            {isFetchingNextPage && <div><SpinnerGap className='animate-spin' size={40} /></div>}
        </div >
    );
};

export default ScrollCompanies;