"use client"
import React, { useState } from 'react'
import LogoTitle from "./_components/LogoTitle"
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import LogoDesc from './_components/LogoDesc'
import LogoPalette from './_components/LogoPalette'
import LogoDesigns from './_components/LogoDesigns'
import LogoIdeal from './_components/LogoIdeal'
import PricingModel from './_components/PricingModel'

const CreatePage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState();
  const onHandleInputChange = (field, value)=>{
  setFormData(prev=>({
    ...prev,
    [field]: value
  }))
  console.log(formData)
  }
  return (
    <div className='mt-20 p-10 border rounded-xl '>
      {step==1? 
      <LogoTitle onHandleInputChange={(v)=>onHandleInputChange("title",v)} 
      formData={formData}/>:
       step==2?
       <LogoDesc onHandleInputChange={(v)=>onHandleInputChange("desc",v)} 
       formdata={formData}/> :
       step==3?
       <LogoPalette onHandleInputChange={(v)=>onHandleInputChange("palette",v)} 
       formData={formData}/>:
       step==4?
       <LogoDesigns onHandleInputChange={(v)=>onHandleInputChange("design",v)}
       formData={formData}/>:
       step==5?
       <LogoIdeal onHandleInputChange={(v)=>onHandleInputChange("idea",v)}
       formData={formData}/>:
        step==6?
       <PricingModel onHandleInputChange={(v)=>onHandleInputChange("pricing",v)}
       formData={formData}/>:
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