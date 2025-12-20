"use client"
import React, { useState } from 'react'
import LogoTitle from "./_components/LogoTitle"
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import LogoDesc from './_components/LogoDesc'
import LogoPalette from './_components/LogoPalette'
import LogoDesigns from './_components/LogoDesigns'
import LogoIdeal from './_components/LogoIdeal'

const CreatePage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState();
  const onHandleIputChange = (field, value)=>{
  setFormData(prev=>({
    ...prev,
    [field]: value
  }))
  console.log(formData)
  }
  return (
    <div className='mt-20 p-10 border rounded-xl '>
      {step==1? 
      <LogoTitle onHandleIputChange={(v)=>onHandleIputChange("title",v)} />:
       step==2?
       <LogoDesc onHandleIputChange={(v)=>onHandleIputChange("desc",v)} /> :
       step==3?
       <LogoPalette onHandleIputChange={(v)=>onHandleIputChange("palette",v)} />:
       step==4?
       <LogoDesigns onHandleIputChange={(v)=>onHandleIputChange("design",v)}/>:
       step==5?
       <LogoIdeal onHandleIputChange={(v)=>onHandleIputChange("idea",v)}/>:
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