
import React, { useState } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import Colors from '@/app/_data/Colors'

const LogoPalette = ({onHandleIputChange}) => {
  const [selectedOption, setSelectedOption] = useState();
  return (
    <div className='my-10'>
      <HeadingDescription 
      title={Lookup.LogoColorPaletteTitle}
      description={Lookup.LogoColorPaletteDesc}
      />
       <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-5'>
        {Colors.map((Palette,index)=>(
          <div key={index} className={`flex cursor-pointer p-1 ${selectedOption==Palette.name&& 'border-2 rounded-lg bg-primary' }`}>
           {Palette?.colors.map((color,index)=>(
            <div className='h-24 w-full'
            key={index}
            onClick={()=>{setSelectedOption(Palette.name)
              onHandleIputChange(Palette.name)
            }}
            style={{
              backgroundColor: color
            }}>
              
            </div>
           ))}
          </div>
        ))}
       </div>

    </div>
  )
}

export default LogoPalette