import { User } from '@phosphor-icons/react'
import React from 'react'

type Props = {
    companyData: any
}

const TableData = ({ companyData }: Props) => {



    const headerClasses = "text-gray-700 w-full ps-2 py-2 font-medium text-sm "
    const classes = 'flex flex-col justify-start items-center w-full border-b py-1'


    return (

        <div className='grid grid-cols-6 text-start pt-0'>
            <div className={classes}>
                <div className={headerClasses}>{companyData.name}</div>
            </div>
            <div className={classes}>
                <div className={headerClasses}>{companyData.phone}</div>
            </div>
            <div className={classes}>
                <div className={headerClasses}>{companyData.email}</div>
            </div>
            <div className={classes}>
                <div className={headerClasses}>{companyData.addresses.addressLine}</div>
            </div>
            <div className={classes}>
                <div className={headerClasses + 'flex gap-1'}>  <User size={20} />   1</div>
            </div>
            <div className={classes}>
                <div className={headerClasses}>Details</div>
            </div>
        </div>

    )
}

export default TableData