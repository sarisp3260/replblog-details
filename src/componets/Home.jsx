import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Home = () => {
  return (
    <>
    
      <div className='mt-20 m-0 text-white h-3/4 grid grid-cols-1 md:grid-cols-2 md:ml-20'>

        <div className='px-10 h-full center items-start flex-col justify-between relative md:pl-20 md:h-3/4'>

          <picture className='w-fit h-20 center overflow-hidden'>
            <img className='w-10 h-10 rounded-full' src="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg" alt="" />
          </picture>
          <span className='absolute top-0 left-5 text-[200px] text-white/30 -rotate-90'>02</span>
          <span className='font-semibold text-xs md:text-sm'>17 March 2020 &#8226; blog</span>
          <h1 className='text-2xl font-bold md:text-3xl'>We create a interesting fasion design</h1>
          <p className='w-full text-sm md:text-base md:w-3/4'>Make your photos look brilliant in today article we present tips on how to use colored lighting in the scenary</p>
          <span className='uppercase text-red-500 font-semibold hover:text-red-400'>Read more</span>

        </div>

        <div className='w-full center items-center md:items-end'>
          <section className='center w-3/4 h-16 gap-2 justify-between backdrop-blur-sm bg-white/30'>
            <h2 className='pl-5'>02</h2>
            <span className='text-sm md:text-base'>Moutain photo collection</span>
            <div className='center bg-red-500 w-20 h-full'>
              <span className=''><AiOutlineArrowRight/></span>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Home