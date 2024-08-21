import Image from 'next/image'
import React from 'react'

// absolute top-1/1 left-1/3 transform -translate-x-1/2 -translate-y-1/2

export default function AboutUs() {
  return (
    <div className='w-full h-[100svh]'>
        <div className='grid grid-cols-2 gap-5 grid-rows-2 px-20 items-center mx-auto pt-20 relative'>
            <div className='bg-red-400 overflow-hidden flex flex-col items-start justify-start sticky'>
                <Image src="/images/about1.svg" 
                alt='image1' 
                height={50} 
                width={50}
                unoptimized
                className='w-[40em] h-[50svh]'
                />
                <Image src="/images/about2.svg" 
                alt='image1' 
                height={50} 
                width={50}
                unoptimized
                className='w-[40em] h-[40svh] mt-[-10em] ml-[10em] '
                />
            </div>
            <div className='bg-green-400 flex flex-col items-start px-20 h-full'>
                <div className='border-l-[1em] rounded-l-2xl border-red-400 mt-10'>
                    <p className='text-4xl ml-5'>About Us</p>
                    <p className='text-lg ml-5'>Expert team</p>
                </div>

                <p className='flex items-center  mt-20'>
                We are a team of professional fitness trainers with years of experience and numerous successful 
                collaborations. Health is our top priority, and we believe that achieving your fitness goals 
                can significantly enhance self-esteem and confidence, positively influencing all areas of your life. 
                Therefore, training should be a lifestyle.
                </p>

            </div>
      </div>
    </div>
  )
}
