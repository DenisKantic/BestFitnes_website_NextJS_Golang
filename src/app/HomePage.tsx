import React from 'react'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className='w-full h-screen'>
      <Image src='/images/bg-home.svg' 
      height={50} 
      width={50} 
      alt='background-image' 
      className='w-full h-[100svh] object-cover object-center-top-10'
      unoptimized
      />
    </div>
  )
}
