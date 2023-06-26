import React from 'react'
import visimg from "../img/vision.jpg";

const Vision = () => {
  return (
    <div className='mb-16 pt-44 lg:pt-[30px] xl:pt-0'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='flex flex-col lg:flex-row gap-[30px] mb-[30px]'>
          <div className='flex-1 lg:max-w-[40%] lg:h-[575px] grad rounded-lg flex justify-center items-center'>
            <img
              src={visimg}
              alt=''
              className='w-full max-w-[75%]'
            />
          </div>
          <div className='flex-1 bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center'>
            {/* category title */}
            <div className='uppercase text-accent text-lg font-medium mb-2'>
              Welcome to the Hustler's Bay !
            </div>
            {/* title */}
            <h2 className='h2 mb-4'>Our Vision</h2>
            {/* description */}
            <p className='mb-12'>At IndSoftware, our vision is to bridge the gap between
             software companies and university students by making quality 
             education and digital services accessible and affordable.
              We understand the challenges students face in pursuing their dreams due 
              to the difference in purchasing power. 
              <br></br>
              <br></br>
               With our dedicated team, we strive to negotiate exclusive
               deals with renowned software companies national and abroad, enabling us to offer courses, self-help subscriptions,
                and digital services at a fraction of their original cost. By doing so, we aim to
                 empower students with the knowledge and tools they need to succeed, unlocking their 
                 full potential and shaping a brighter future for India.</p>
            {/* price & btn */}
            <div className='flex items-center gap-x-8'>
              {/* price */}
              <div className='text-3xl text-accent font-semibold'>
                Premium Education, Affordable Access
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vision
