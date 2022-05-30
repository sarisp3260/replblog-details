import React from 'react'
import { IoIosClose } from "react-icons/io";
import { motion } from 'framer-motion';
import {FaInstagram, FaFacebook, FaTwitter} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Menu = ({open ,setOpen}) => {

  return (
    <motion.div
        initial={{ opacity: 0 }}
        exit={{ opacity: .5 }}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className='relative z-50 py-20 center flex-col justify-between bg-zinc-900 h-full'
    >
         <div className="absolute top-3 right-3" onClick={()=> setOpen(!open)}>
          <IoIosClose className="h-10 w-10 "/>
        </div>
        
        <Link to="/" onClick={()=> setOpen(!open)}>
            <h1>Main page</h1>
        </Link>
        <hr className='border-b-1 border-dashed w-9/12 border-white'/>

        <a href="https://github.com/sarisp3260/replblog-details.git" target="_blank" onClick={()=> setOpen(!open)}>
            <h1>Repository</h1>
        </a>
        <hr className='border-b-1 border-dashed w-9/12 border-white'/>

        <a href="https://www.instagram.com/p/CeHGu_Nvzd1/?utm_source=ig_web_copy_link" target="_blank" onClick={()=> setOpen(!open)}>
            <h1>Post inspiration</h1>
        </a>
        <hr className='border-b-1 border-dashed w-9/12 border-white'/>

        <Link to="/More" onClick={()=> setOpen(!open)}>
            <h1>About this project</h1>
        </Link>
        <hr className='border-b-1 border-dashed w-9/12 border-white'/>

        <div className='block text-xl md:hidden'>
            <div className='center gap-6'>
                <FaInstagram/>
                <FaFacebook/>
                <FaTwitter/>
            </div>
        </div>
    </motion.div>
  )
}

export default Menu