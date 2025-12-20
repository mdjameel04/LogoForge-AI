"use client"
import React, { useState } from 'react'
import LogoTitle from "./_components/LogoTitle"
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const CreatePage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState();
  const onHandleIputChange = (field, value)=>{
  setFormData(prev=>({
    ...prev,
    [field]: value
  }))
  }
  return (
    <div className='mt-20 p-10 border rounded-xl 2xl:mx-72'>
      {step==1? <LogoTitle onHandleIputChange={(v)=>onHandleIputChange("title",v)} />:
      null
      }

   <div className='flex items-center justify-between mt-10'>
   {step!=1 && <Button variant="outline" onClick={()=>setStep(step-1)}> <ArrowLeft/> Pervious </Button>}
    <Button onClick={()=>setStep(step+1)}> <ArrowRight/> Continue </Button>
   </div>
    </div>
  )
}

export default CreatePage