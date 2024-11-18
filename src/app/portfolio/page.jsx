import Link from 'next/link'
import React from 'react'

const Portfolio = () => {
  return (
    <div className="">
      <h1 className="mx-0 my-5">Choose a gallery</h1>
      <div className="flex gap-12">
        <Link href="/portfolio/illustrations" className='bg-cover bg-[url(/port-5.jpg)] border-4 border-solid border-gray-200 rounded-md w-72 h-80 relative  hover:text-blogGreen'>
          <span className=" absolute right-3 bottom-3 text-xl font-bold">Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className='bg-cover bg-[url(/port-4.jpg)] border-4 border-solid border-gray-200 rounded-md w-72 h-80 relative  hover:text-blogGreen'>
          <span className=" absolute right-3 bottom-3 text-xl font-bold" >Websites</span>
        </Link>
        <Link href="/portfolio/applications" className='bg-cover bg-[url(/port-3.jpg)] border-4 border-solid border-gray-200 rounded-md w-72 h-80 relative  hover:text-blogGreen'>
          <span className=" absolute right-3 bottom-3 text-xl font-bold">Applications</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio