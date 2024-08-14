import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='fixed w-full pt-5 px-20 flex flex-row items-center justify-between'>
            <Image src="/images/logo.svg" alt="test" height={100} width={100} className='mr-20'/>
            <div className='flex flex-row items-center justify-around w-full ml-20 text-lg font-bold tracking-wider'>
            <p>Home</p>
            <p>About</p>
            <p>Programs</p>
            <p>Testimonials</p>
            <p>Contact us</p>
            <p>Contact us</p>

            </div>

      
    </div>
  )
}
