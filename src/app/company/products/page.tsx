import CvaButton from '@/components/UI/CvaButton'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Products = (props: Props) => {
  return (
    <div>
      <h3 className='text-3xl text-center py-5'>Products</h3>
      <div className='mx-auto w-fit my-20'> 
        <Link href='/company/products/ratesheet-details' ><CvaButton intent='primary' animate size='medium'> Details </CvaButton></Link>
        <div className='p-5'></div>
        <Link href='/company/products/primaryDetails' ><CvaButton intent='primary' animate size='medium'> Details2 </CvaButton></Link>
        <div className='p-5'></div>
        <Link href='/company/products/create-product' ><CvaButton intent='primary' animate size='medium'> Create Product </CvaButton></Link>
      </div>

    </div>
  )
}

export default Products