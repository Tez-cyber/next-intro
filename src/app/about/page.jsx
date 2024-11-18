import React from 'react'
import AbtImg from "public/abt-1.jpg"
import Image from 'next/image'
import Button from '@/components/Button/Button'

const About = () => {
  return (
    <div className="">
      <div className="w-full h-72 relative">
        <Image 
          src={AbtImg}
          alt='about page image'
          className=' object-cover h-96'
        />
        <div className=" absolute bottom-[-70px] left-5 bg-blogGreen text-white p-2">
          <h1 className="text-2xl font-semibold">Digital Storytellers</h1>
          <h2 className='font-[500] '>Handcrafting award winning digital experiences </h2>
        </div>
      </div>
      <div className="flex gap-24 mt-40">
        <div className=" flex-[1] flex flex-col gap-7">
          <h1 className='text-2xl font-bold capitalize'>Who are we?</h1>
          <p className=' font-[300] text-justify'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Eveniet quibusdam voluptates fuga. Nulla eum facilis 
            eveniet molestias dolorem provident numquam architecto 
            quia natus deserunt dolore, totam cum veniam voluptatem 
            similique, quibusdam amet eos necessitatibus harum quae 
            illum omnis alias rem sequi. Eveniet laboriosam voluptatibus 
            doloribus rerum. Non facilis distinctio animi?
          </p>
          <p className=' font-[300] text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Totam cum inventore rem architecto nulla nostrum voluptatum 
            iste magnam distinctio nihil, nobis dolores, facere adipisci 
            omnis, asperiores porro repellat dolorem? Autem!
          </p>
        </div>
        <div className=" flex-[1] flex flex-col gap-7">
          <h1 className='text-2xl font-bold capitalize'>What we do?</h1>
          <p className=' font-[300] text-justify'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Eveniet quibusdam voluptates fuga. Nulla eum facilis 
            eveniet molestias dolorem provident numquam architecto 
            quia natus deserunt dolore, totam cum veniam voluptatem 
            similique, quibusdam amet eos necessitatibus harum quae 
            illum omnis alias rem sequi. Eveniet laboriosam voluptatibus 
            doloribus rerum. Non facilis distinctio animi?
          </p>
          <ul>
            <li>- Creative illustrations</li>
            <li>- Dynamic Website</li>
            <li>- Fast and Handy Mobile Apps</li>
          </ul>
          <Button url="contact" text="Contact" />
        </div>
      </div>
    </div>
  )  
}

export default About