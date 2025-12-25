"use client"
import React, { useContext } from 'react'
import { UserDetailContext } from '../_context/UserDetailContext'

const GenrateLogo = () => {
  const {userDetail, setUserDetail} = useContext(UserDetailContext)
  console.log(userDetail) 
  return (
    <div> Generate logo for </div>
  )
}

export default GenrateLogo