import React from 'react'
import {HiOutlineMinus} from 'react-icons/hi'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='hidden md:block'>
      <div className='w-full center h-16 absolute bottom-0 text-white'>
          <div className='center w-1/3'>
              <h1 className='center gap-3 text-sm md:text-base'>Category <HiOutlineMinus/></h1>
          </div>
          <div className='w-1/2 center justify-end '>
            <Link to="/More">
              <h1 className='center gap-3 hover:text-red-500'>About this proyect</h1>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default Footer