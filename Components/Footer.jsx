import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
      <Image src={assets.logo_light} alt='' width={120} />
      <p className='text-sm text-white'>All rights reserved. Copyright @blogger</p>
      <div className='flex'>
        <Image src={assets.facebook_icon} alt='' width={50} />
        <Image src={assets.twitter_icon} alt='' width={50} />
        <Image src={assets.googleplus_icon} alt='' width={50} />
      </div>
      <Link href={'/admin'}>
      <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid text-white border-white shadow-[-7px_7px_0px_#FFFFFF]'>Go to admin page <Image className='invert' src={assets.arrow} alt=''/></button>
      </Link>
    </div>
  )
}

export default Footer