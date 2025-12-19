import React from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'

const LogoTitle = () => {
  return (
    <div className='my-10'>
        <HeadingDescription
        title={Lookup.LogoTitle}
        description={Lookup.LogoTitleDesc}
        />
    </div>
  )
}

export default LogoTitle