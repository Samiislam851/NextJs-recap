import CustomButton from '@/components/UI/CustomButton'
import CvaButton from '@/components/UI/CvaButton'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>

      <div className='flex gap-5'>
        <CustomButton type={'primary'} > Primary</CustomButton>
        <CustomButton type={'secondary'} > Secondary</CustomButton>
        <CustomButton type={'primary'} animate={true}> primary Animate </CustomButton>
        <CustomButton type={'secondary'} animate={true}> Secondary Animate </CustomButton>



        {/* CVA button */}

        <CvaButton intent='primary' size='small'>CVA primary</CvaButton>
        <CvaButton intent='secondary' size='medium'>CVA Secondary</CvaButton>


      </div>

    </div>
  )
}

export default page