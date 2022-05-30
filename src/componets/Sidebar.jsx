import React from 'react'
import {FaInstagram, FaFacebook, FaTwitter} from 'react-icons/fa'
import {BiCoffee} from 'react-icons/bi'

import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='hidden absolute top-0 w-16 h-full center flex-col justify-start py-4 px-2 z-50 text-white md:block bg-primary'>
        <div className='h-1/3'>
            <Link to="/" className='hover:animate-pulse hover:text-red-500'>
                <BiCoffee className="h-8 w-8 " />
            </Link>
        </div>
        <div className='center flex-col gap-6 text-xl'>
            <FaInstagram/>
            <FaFacebook/>
            <FaTwitter/>
        </div>
    </div>
  )
}

export default Sidebar