

import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
const Navbar = () => {
  return (
    <div  className=' flex items-center justify-between p-4 shadow-2xl'>
      <Image src='/design.png' alt="logo" width={80} height={70} className='rounded-2xl' />
      
      <div className='flex '> <UserButton/></div>
    </div>
  )
}

export default Navbar