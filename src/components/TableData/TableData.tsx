import React from 'react'

type Props = {
    companyData : any
}

const TableData = ({companyData}: Props) => {



    const headerClasses = "text-gray-700 w-full ps-2 py-2 font-medium text-sm "


    return (

        <div className='grid grid-cols-6 text-start pt-0'>
            <div className="flex flex-col justify-start items-center w-full ">
                <div className={headerClasses}>{companyData.namy}</div>
            </div>
            <div className="flex flex-col justify-start items-center w-full ">
                <div className={headerClasses}>{companyData.phone}</div>
            </div>
            <div className="flex flex-col justify-start items-center w-full ">
                <div className={headerClasses}>{companyData.email}</div>
            </div>
            <div className="flex flex-col justify-start items-center w-full ">
                <div className={headerClasses}>{companyData.location}</div>
            </div>
            <div className="flex flex-col justify-start items-center w-full ">
                <div className={headerClasses}>Products</div>
            </div>
            <div className="flex flex-col justify-start items-center w-full ">
                <div className={headerClasses}>Action</div>
            </div>

        </div>

    )
}

export default TableData