import React from 'react'
import Header from './_components/Header'

const provider = ({children}) => {

  // save user data
const CheckUserAuth=()=>{
  //save User to Database
}
  return (
    <div>
      <Header/>
      <div  className='px-10 lg:px-32 xl:px-48'>
      {children}
      </div>
      
    </div>
  )
}

export default provider