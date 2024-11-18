import Image from 'next/image'
import React from 'react'
import contactImg from "public/img-5.svg"
import Button from '@/components/Button/Button'

const Contact = () => {
  return (
    <div className="h-[700px]">
      <h1 className=" capitalize text-3xl font-bold mt-5 mb-24 text-center">Let's keep in touch</h1>
      <div className="flex items-center gap-24 h-[300px]">
        <div className="flex-[1] relative">
          <Image 
            src={contactImg}
            alt=''
            className='h-[350px] object-contain animate-move'
          />
        </div>
        <form className="flex-[1] flex flex-col gap-5">
          <input 
            type="text"
            placeholder='name' 
            className='p-3 bg-transparent outline-0 border-2 border-solid border-gray-200 text-lg font-bold' 
          />
          <input 
            type="text"
            placeholder='email' 
            className='p-3 bg-transparent outline-0 border-2 border-solid border-gray-200 text-lg font-bold' 
          />
          <textarea 
            placeholder="message" 
            className='p-3 bg-transparent outline-0 border-2 border-solid border-gray-200 text-lg font-bold' 
            cols="30" 
            rows="6"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  )
}

export default Contact