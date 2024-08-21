import Image from 'next/image'
import React from 'react'

export default function BenefitsFitness() {
  return (
    <div className='w-full min-h-[50svh] px-20 mx-auto pb-20 relative'>
      <div>
        <p>The benefits of Fitness</p>
        <p>Here are some fundamental aspects of fitness and reasons why we should engage in it</p>
      </div>

      <div className='w-full grid grid-rows-2 grid-cols-2 mt-10 gap-20 sticky'>

        <div className='flex flex-row items-center sticky'>
            <Image
            src="/images/man_running.svg"
            alt='Man running'
            height={50}
            width={50} 
            className='h-full w-[4em]'
            />
                 <div className='ml-5'>
                    <p className='text-xl font-bold'>Physical Health</p>
                    <p className='text-lg font-thin'>Regular physical activity improves cardiovascular health, strengthens muscles and bones,
                        and reduces the risk of various diseases such as diabetes and hypertension</p>
                 </div>
        </div>

        <div className='flex flex-row items-center'>
            <Image
            src="/images/brain.svg"
            alt='Man running'
            height={50}
            width={50} 
            className='h-full w-[4em]'
            />
                 <div className='ml-5'>
                    <p className='text-xl font-bold'>Mental Health</p>
                    <p className='text-lg font-thin'>Exercise can reduce symptoms of anxiety and depression, 
                        improve mood, and increase energy levels thanks to the release of endorphins</p>
                 </div>
        </div>

        <div className='flex flex-row items-center'>
            <Image
            src="/images/weight.svg"
            alt='Man running'
            height={50}
            width={50} 
            className='w-[3em]'
            />
                 <div className='ml-5'>
                    <p className='text-xl font-bold'>Weight Management</p>
                    <p className='text-lg font-thin'>Fitness helps maintain a healthy body weight and is one of the
                         key factors in weight loss</p>
                 </div>
        </div>

        <div className='flex flex-row items-center'>
            <Image
            src="/images/equipment.svg"
            alt='Man running'
            height={50}
            width={50} 
            className='h-full w-[4em]'
            />
                 <div className='ml-5'>
                    <p className='text-xl font-bold'>Increased Endurance and Strength</p>
                    <p className='text-lg font-thin'>Regular exercise improves physical endurance, making daily 
                        activities easier, and increases muscle strength</p>
                 </div>
        </div>

        <div className='flex flex-row items-center'>
            <Image
            src="/images/fitness_icon.svg"
            alt='Icon fitness'
            height={50}
            width={50} 
            className='h-full w-[4em]'
            />
                 <div className='ml-5'>
                    <p className='text-xl font-bold'>Flexibility</p>
                    <p className='text-lg font-thin'>Stretching and mobility exercises improve flexibility, which can 
                        help prevent injuries</p>
                 </div>
        </div>

        <div className='flex flex-row items-center'>
            <Image
            src="/images/people.svg"
            alt='Man running'
            height={50}
            width={50} 
            className='h-full w-[4em]'
            />
                 <div className='ml-5'>
                    <p className='text-xl font-bold'>Social Aspect</p>
                    <p className='text-lg font-thin'>Fitness can also be a social activity, whether through group workouts, sports, or 
                        shared activities, which encourages connecting with others</p>
                 </div>
        </div>


      </div>
    </div>
  )
}
