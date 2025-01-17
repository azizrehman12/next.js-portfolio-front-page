import { title } from 'process'
import React from 'react'

const Magicbutton = ({
    title ,icon , position , handleclick ,otherclasses }:{
        title : string ;
        icon: React.ReactNode;
        position: string ;
        handleclick?: () => void ; 
        otherclasses ?: string ;
    }) =>  {
  return (
    <button className="relative inline-flex h-12 w-full overflow-hidden  p-[1px] rounded-lg
    focus:outline-none md:w-60 md:mt-10 ">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center 
     bg-slate-950 px-3 py-1 text-sm font-medium rounded-lg
   text-white backdrop-blur-3xl">
    {title}
  </span>
</button>
  )
    }

export default Magicbutton