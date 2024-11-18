import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className=' h-12 flex items-center justify-between'>
      <div className=''>
        &copy;2023 Lamamia. All rights reserved 
      </div>
      <div className='flex items-center gap-2 text-xl cursor-pointer'>
        <FaFacebookSquare className=' bg-blue-900' />
        <FaInstagramSquare className='' />
        <FaTwitterSquare className=' bg-blue-900' />
      </div>
    </div>
  )
}

export default Footer