"use client"
import React, { useState } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import { useSearchParams } from 'next/navigation'

const LogoTitle = ({onHandleIputChange}) => {
  const searchParmas = useSearchParams();
  const [title, setTitle] = useState(searchParmas?.get('title'));
  return (
    <div className='my-10'>
        <HeadingDescription
        title={Lookup.LogoTitle}
        description={Lookup.LogoTitleDesc}
        />
        <input placeholder={Lookup.InputTitlePlaceholder}
        className='p-4 border w-full rounded-lg mt-5'
        defaultValue={title}
        onChange={(e)=>onHandleIputChange(e.target.value)}
        />
        
    </div>
  )
}

export default LogoTitle