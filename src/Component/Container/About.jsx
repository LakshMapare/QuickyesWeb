import React from 'react'
import Trainer from '../../assets/Trainer.jpg'

const About = () => {
  return (
    <div className='section mt-20' id='about'>
      <div className='grid md:grid-cols-2 gap-8 place-items-center '>
        <div className='border-[3px] border-solid border-teal-800 rounded-lg ml-11'>
          <img src={Trainer} alt="" className='p-4' />
        </div>
        <div>
          <div className='font-bold sm:text-[1.875rem] text-[1.5rem] mb-5'>
            We Provide the<br/> best{" "} <span className='text-teal-800'>online Cources</span> 
          </div>
          <p className='text-sm text-gray-500 leading-7 mb-4'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, hic. Vel, deserunt! Amet magnam officia qui neque expedita animi cum ea, molestiae a est sequi similique soluta sapiente exercitationem debitis.
          </p>
          <button className='py-3 px-6 text-sm border border-solid border-gray-500 rounded-lg font-bold'>Know More</button>
        </div>

      </div>
    </div>
  )
}

export default About