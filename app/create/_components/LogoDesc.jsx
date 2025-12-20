import React from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'

const LogoDesc = ({onHandleInputChange, formData}) => {
  return (
    <div className='my-10'>
   <HeadingDescription 
   title={Lookup.LogoDescTitle}
   description={Lookup.LogoDescDesc}
   /> 
    <input placeholder={Lookup.InputTitlePlaceholder}
           className='p-4 border w-full rounded-lg mt-5'
          value={formData?.desc}
           onChange={(e)=>onHandleInputChange(e.target.value)}
           />
    </div>
  )
}

export default LogoDesc