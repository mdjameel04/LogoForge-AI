"use client"
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'

import Image from 'next/image'
import React from 'react'

const Header = () => {
const {user} = useUser()
  return (
    <div className='flex items-center justify-between px-10 lg:px-32 xl:px-48 p-4 shadow-sm'>
        <Image src={"/logo.svg"} alt='logo' height={200} width={200} />
        <div className='flex items-center gap-3'>
          {user ?<Button > Dashboard </Button>:
      <Button> Get Started </Button>}
      <UserButton/>
        </div>
       
       
    </div>
  )
}

export default Header