import React from 'react'
import {Button} from './ui/button'
import { Search } from 'lucide-react'

const HeroSection = () =>{
  return (
    <div className='text-center'>
        <div className='flex flex-col gap-5 my-10'>
            <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Job Hunt Website</span>
        <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className=' text-[#F83002]'>Dream Jobs</span></h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus id, illum earum dicta tempore porro omnis sequi quam quas dolore atque magnam error fuga nihil aliquid a iste, quod unde!</p>
        <div className='flex w-[40%] shadow-lg border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
             <input
            type='text'
            placeholder='Find your dream jobs'
            className='outline-none border-none w-full'
        />
        <Button className='rounded-r-full bg-[#F83002]'>
            <Search className='h-5 w-5'/>
        </Button>
        </div>
       </div>
    </div>
  )
}
export default HeroSection
