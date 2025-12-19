import React from 'react'
import Lookup from '../_data/Lookup'
import { lookup } from 'dns'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <div className='mt-24 flex items-center flex-col gap-5'>
<h2 className='text-5xl text-center font-bold text-primary'> {Lookup.HeroHeading} </h2>
<h2 className='text-5xl text-center font-bold'> {Lookup.HeroSubheading} </h2>
<p className='text-xl text-gray-500 text-center'> {Lookup.HeroDesc} </p>

 <div className='mt-10 flex gap-6 w-full max-w-2xl '>
    <input placeholder={Lookup.InputTitlePlaceholder}
    className='p-3 border rounded-md w-full shadow-md'/>
    <Button className='p-6'> Get Started </Button>
 </div>

    </div>
  )
}

export default Hero