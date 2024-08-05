import React from 'react'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import Magicbutton from './ui/magicbutton'

const hero = () => {
  return (
    <div className='pb-20 pt-36'>
    <div >
        <Spotlight className='-top-40 -left-10-
        m:-left-32 md:-top20 h-screen' fill='white'/>
        <Spotlight className='-top-10- -left-full h-[80vh]
        w-[50vw]' fill='purple'/>
        <Spotlight className='top-28 left-80 h-[80vh] w- [50vw]
        ' fill='blue'/>
    </div>
    
    <div>
    <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white 
      [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
    </div>
    <div>
        <div className='justify-center flex relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
       <h2 className='uppercase tracking-widest text-xs text-center max-w-80'> Daynamic web magic with next.js</h2>
       <TextGenerateEffect 
       className='text-center text-[40px] md:text-5xl lg:text-6xl'
       words='Transforming concepts into seamles Expernence'
       />
       <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
          Hello , I&apos;m Aziz Rehman , a Next.js Developer
       </p>

       <a href="#about"> 
        <Magicbutton title={'show my work'} />
       </a>
        </div>
        </div>

    </div>
    </div>
    </div>
  )
}

export default hero