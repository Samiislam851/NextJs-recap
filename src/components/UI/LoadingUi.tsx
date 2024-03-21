import clsx from 'clsx'
import React from 'react'

type Props = {}

const LoadingUi = (props: Props) => {


    const headerClasses = "bg-gray-100 w-full ps-2 py-2 font-medium text-sm "
    const otherClasses = "text-gray-700 w-full ps-2 py-2 font-medium text-sm "
    const arr = new Array(10).fill(0)



    return (
        <div>

            <div className='grid grid-cols-4 text-start pt-3'>
                {arr.slice(0, 4).map((val, index) =>

                    <div key={index} className="flex flex-col justify-start items-center w-full ">
                        <div className={headerClasses}>
                            <div className={clsx('bg-gray-300 animate-pulse rounded-2xl h-[1rem] my-2 w-[70%]'
                            )}></div>
                        </div>
                    </div>

                )}

            </div>


            {arr.map((num, i) =>
                <div key={i} className='grid grid-cols-4 text-start border-t border-gray-100'>
                    {arr.slice(0, 4).map((val, index) =>

                        <div key={index} className="flex flex-col justify-start items-center w-full ">
                            <div className={otherClasses}>
                                <div className={clsx('bg-gray-200 animate-pulse rounded-2xl h-[1rem] my-2',
                                    { 'w-[90%]': i % 2 === 0 },
                                    { 'w-[70%]': i % 2 === 1 }

                                )}></div>
                            </div>
                        </div>
                    )}
                </div>

            )}




        </div>
    )
}

export default LoadingUi