import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import blogImg from "/public/port-2.jpg"

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // next: { revalidate: 10 }
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error('Faile to fetch data')
  }
  
  return res.json()
}

const Blog = async () => {

  const data = await getData()
  return (
    <div className="">
      {data.map(item => (
        <Link href={`/blog/${item.id}`} key={item.id} className='flex items-center gap-[400px] m-6 '>
          <div className="">
            <Image
              src={blogImg}
              alt=''
              width={300}
              height={250}
              className=''
            />
          </div>
          <div className="">
            <h1 className="">{item.title}</h1>
            <p className="">Desc</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Blog