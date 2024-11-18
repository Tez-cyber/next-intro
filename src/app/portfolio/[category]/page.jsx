import React from 'react'
import Button from '@/components/Button/Button'
import Image from 'next/image'
import img from "/public/port-1.jpg"

const Category = ({params}) => {
  console.log(params)
  return (
    <div className="">
      <h1 className=' text-blogGreen capitalize'>{params.category}</h1>
      <div className="flex gap-[100px] mt-12 mb-20">
        <div className="flex-[1] flex flex-col gap-8 ">
          <h1 className=' text-xl font-bold'>Creative Portfolio</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Libero minus est, iure maxime rem vitae 
            laudantium ducimus explicabo? Porro quo enim 
            repellat beatae odio earum sapiente et ratione 
            consequatur ducimus!
          </p>
          <Button text="See More" url="#"></Button>
        </div>
        <div className="flex-[1] h-[500px] relative">
          <Image
            src={img}
            className=' object-cover'
          />
        </div>
      </div>
      <div className="flex gap-[50px] mt-12 mb-20 ">
        <div className="flex-[1] flex flex-col gap-5 ">
          <h1 className=' text-xl font-bold'>Creative Portfolio</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Libero minus est, iure maxime rem vitae 
            laudantium ducimus explicabo? Porro quo enim 
            repellat beatae odio earum sapiente et ratione 
            consequatur ducimus!
          </p>
          <Button text="See More" url="#"></Button>
        </div>
        <div className="flex-[1] h-[500px] relative">
          <Image
            src={img}
            className=' object-cover'
          />
        </div>
      </div>
      <div className="flex gap-[50px] mt-12 mb-20 ">
        <div className="flex-[1] flex flex-col gap-5 ">
          <h1 className=' text-xl font-bold'>Creative Portfolio</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Libero minus est, iure maxime rem vitae 
            laudantium ducimus explicabo? Porro quo enim 
            repellat beatae odio earum sapiente et ratione 
            consequatur ducimus!
          </p>
          <Button text="See More" url="#"></Button>
        </div>
        <div className="flex-[1] h-[500px] relative">
          <Image
            src={img}
            className=' object-cover'
          />
        </div>
      </div>
    </div>
  )
}

export default Category