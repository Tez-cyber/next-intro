"use client"
import Link from 'next/link'
import React from 'react'
import Darkmode from '../DarkMode/Darkmode'


const links = [
    {
        id: 1,
        title: "Home",
        url: "/"
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio"
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog"
    },
    {
        id: 4,
        title: "About",
        url: "/about"
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact"
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard"
    },
]
const Navbar = () => {
    return (
        <div className=' h-24 flex justify-between items-center'>
            <Link href="/" className=' font-bold text-xl'>lamaia</Link>
            <div className=' flex items-center gap-5'>
                <Darkmode />
                {
                    links.map(link => (
                        <Link key={link.id} href={link.url} className=''>
                            {link.title}
                        </Link>
                    ))
                }
                <button onClick={() => {
                    console.log("logged out")
                }} className='py-2 px-3 rounded-md bg-blogGreen text-white cursor-pointer'>Logout</button>
            </div>
        </div>
    )
}

export default Navbar