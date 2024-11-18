import Link from 'next/link'
import React from 'react'

const Button = ({text, url}) => {
  return (
    <Link href={url}>
        <button className=" p-3 cursor-pointer bg-blogGreen text-white rounded-md w-max capitalize">
            {text}
        </button>
    </Link>
  )
}

export default Button