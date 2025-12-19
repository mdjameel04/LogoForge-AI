import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between px-10 lg:px-32 xl:px-48 p-4 shadow-sm'>
        <Image src={"/logo.svg"} alt='logo' height={200} width={200} />
        <Button> Get Started </Button>
    </div>
  )
}

export default Header