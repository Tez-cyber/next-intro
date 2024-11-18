import Image from 'next/image'
import jumboImg from "public/img-3.svg"
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className='gap-24 flex center items-center'>
      <div className=" flex-1 flex flex-col gap-12">
        <h1 className='text-7xl font-semibold bg-gradient-to-b 
                    from-[#194c33] to-[#bbb] bg-clip-text text-transparent'
        >
          Better design for your digital products
        </h1>
        <p className=' text-xl font-light'>
          Turning your Idea into Reality. We bring together 
          the teams from the global tech industry.
        </p>
        <Button 
          url="/portfolio" text="See our works" />
      </div>
      <div className=" flex-1 flex flex-col gap-12">
        <Image src={jumboImg} 
          className=' w-full h-[500px] animate-move'
          alt="Jumbotron section Image" />
      </div>
    </div>
  )
}
