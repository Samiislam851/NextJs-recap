import React, { ReactNode } from 'react'

type Props = {

    children: ReactNode


}

const layout = ({ children }: Props) => {
    return (
        <div className='font-roboto'>

            {/* header */}
            <div className='px-4 py-3 flex justify-between items-center shadow-md'>
                <div>
                    <img src="/charge-onsite-logo.png" alt="logo" />
                </div>
                <div className='flex gap-[6px] justify-between items-center'>
                    <div>
                        <img src="/navbar-logo-mobile.png" alt="" />
                    </div>
                    <div><h3 className='text-[#115955]'>Menu</h3></div>



                   
                </div>

            </div>


            {children}



        </div>
    )
}

export default layout