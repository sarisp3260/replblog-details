import {useState} from 'react'
import repl from '../assets/Captura de pantalla 2022-05-29 100519.png'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {FaReact} from 'react-icons/fa'
import {SiVite} from 'react-icons/si'

import { motion } from 'framer-motion'


const More = () => {

  const [isFlipped, setIsFlipped] = useState(false);

    function handleClick() {
        setIsFlipped(!isFlipped);
    }
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }} 
    className='center flex-col gap-10 mx-5 mt-20 h-3/4 text-white md:flex-row'>

      <div className=''>
        <img className='w-96 rounded-md md:w-auto' src={repl} alt="" />

      </div>

      <div className='center flex-col justify-between h-full '>
        <h1 className='text-3xl uppercase text-center font-semibold'>React vite proyect replica</h1>
        <div className='center text-8xl  justify-between'>
          <FaReact/>
          <SiVite/>
        </div>
        <p className='center gap-3 order-first md:order-none'> <span className='rotate-180 md:rotate-90'><AiOutlineArrowDown className='animate-bounce'/></span>  reference image</p>

      </div>

    </motion.div>
  )
}

export default More