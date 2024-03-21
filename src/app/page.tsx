import CustomButton from '@/components/UI/CustomButton'
import CvaButton from '@/components/UI/CvaButton'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>

      <div className='flex gap-5'>
   

        {/* CVA button */}

        <CvaButton intent='primary' size='small'>Primary</CvaButton>
        <CvaButton intent='secondary' size='medium' animate={true} > Secondary</CvaButton>
        <CvaButton  size='medium' disabled={true} > Disabled secondary</CvaButton>


      </div>

    </div>
  )
}

export default page