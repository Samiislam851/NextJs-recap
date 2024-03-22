import { TableDataType } from '@/utils/tableDataType'
import { CaretLeft, CaretRight, DotsThree } from '@phosphor-icons/react'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'

type Props = {

    data: TableDataType | undefined,
    currentPage: number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>

}

const Pagination = ({ data, currentPage, setCurrentPage }: Props) => {

    const [totalPages, setTotalPages] = useState<number[]>([])


    useEffect(() => {
        if (data) {
            setTotalPages(() => {
                if (data.data?.count) {
                    const elements = data.data?.count
                    const lastPage = Math.ceil(elements / 10)
                    return Array.from({ length: lastPage }, (_, index) => index + 1);
                } else {

                    return []
                }

            })
        }
    }, [data])








    return (


        <div className="flex justify-between pt-5 text-gray-500">

            <span>

                Showing {(data && data.data?.data?.length < 10) ?
                    ((currentPage - 1) * 10) + data.data?.data.length
                    :
                    currentPage * 10} of {data && data.data?.count}
            </span>

            <div className='flex gap-2 justify-center'>
                <button disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => prev - 1)}>
                    <CaretLeft size={25} />
                </button>







                {currentPage <= 4 && totalPages.length > 4 && <>


                    {totalPages.slice(0, 4).map(num =>
                        <button className={clsx('border px-2', { 'bg-blue-500 text-white': num === currentPage })} key={num} onClick={() => setCurrentPage(num)}>
                            {num}
                        </button>

                    )} <span className='text-gray-400 '><DotsThree size={25} /></span>

                    <button onClick={() => setCurrentPage(totalPages.length)}>
                        {totalPages.length}
                    </button>

                </>}


                {/* for gt 4 */}


                {currentPage > 4 && currentPage < totalPages.length - 2 && totalPages.length > 5 && <>



                    <button className='border px-2' onClick={() => setCurrentPage(1)}>
                        1
                    </button>

                    <span className='text-gray-400 '><DotsThree size={25} /></span>

                    {totalPages.slice(currentPage - 2, currentPage + 1).map(num =>
                        <button className={clsx('border px-2', { 'bg-blue-500 text-white': num === currentPage })} key={num} onClick={() => setCurrentPage(num)}>
                            {num}
                        </button>

                    )} 
                    
                    <span className='text-gray-400 '><DotsThree size={25} /></span>

                    <button className='border px-2' onClick={() => setCurrentPage(totalPages.length)}>
                        {totalPages.length}
                    </button>

                </>}


                {/* last page */}




                {currentPage > totalPages.length - 3 && totalPages.length > 5 && <>



                    <button className='border px-2' onClick={() => setCurrentPage(1)}>
                        1
                    </button>

                    <span className='text-gray-400 '><DotsThree size={25} /></span>

                    {totalPages.slice(totalPages.length - 4).map(num =>
                        <button className={clsx('border px-2', { 'bg-blue-500 text-white': num === currentPage })} key={num} onClick={() => setCurrentPage(num)}>
                            {num}
                        </button>

                    )}

                </>}








                <button disabled={currentPage === (Math.ceil(data?.data.count! / 10))} onClick={() => setCurrentPage((prev) => prev + 1)}>
                    <CaretRight size={25} />
                </button>
            </div>

        </div>
    )
}

export default Pagination