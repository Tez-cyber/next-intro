import Image from 'next/image'
import React from 'react'
import blogImg from "/public/port-2.jpg"
import { notFound } from "next/navigation"

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    // next: { revalidate: 10 }
    cache: "no-store"
  })

  if (!res.ok) {
    return notFound()
  }
  
  return res.json()
}

const BlogPost = async ({params}) => {
  const data = await getData(params.id)
  return (
    <div className="">
      <div className="flex gap-[200px] mt-12 mb-10">
        <div className="flex-[1] flex flex-col gap-7">
          <h1 className=' text-xl font-bold'>{data.title}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Libero minus est, iure maxime rem vitae
            laudantium ducimus explicabo? Porro quo enim
            repellat beatae odio earum sapiente et ratione
            consequatur ducimus!
          </p>
          <div className="flex items-center gap-5">
            <Image
              src={blogImg}
              alt=''
              className=' w-[40px] h-[40px] object-cover rounded-full'
            />
            <span className="">John Doe</span>
          </div>
        </div>
        <div className="flex-[1]">
          <Image
            src={blogImg}
            alt=''
            className=' w-[500px] h-[250px] object-cover'
          />
        </div>
      </div>
      <div className="mb-10">
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, optio. Cumque maxime nostrum dolor enim voluptatibus, esse, aut cupiditate ad tempora dolorem dolores, eius nobis adipisci reiciendis ratione laborum voluptatem at molestiae. Ab, sapiente repudiandae temporibus eaque vero corrupti expedita exercitationem obcaecati vel a numquam facilis cum impedit ad voluptas iusto voluptate ratione blanditiis voluptates nobis incidunt tempore? Delectus, voluptatem dignissimos. Incidunt tempore id aliquid quaerat nam pariatur dignissimos quia ad. Suscipit molestiae, possimus exercitationem veniam optio adipisci. Sunt tempore dolores voluptatum distinctio mollitia. Nam aperiam eos omnis, inventore exercitationem fuga facere. Quo, nobis ipsa odit ipsam quisquam quas fugit!
        </p>
      </div>

    </div>
  )
}

export default BlogPost