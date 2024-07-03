import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { animateWithGsap } from '../utils/animations';

export const Features = () => {
  const videoRef =useRef()

  useGSAP(()=>{
    animateWithGsap('#exploreVideo')
    animateWithGsap('#feature_title',{y:0,opacity:1})
    animateWithGsap('.g_grow',
      {scale:1,opacity:1,ease:'power1'},
      {scrub:5.5}
    );
    animateWithGsap(
      '.g_text',
      {y:0,opacity:1,ease:'power1',duration:1}
    );
  },[]);
  return (
    <section className='overflow-hidden h-full common-padding bg-zinc-900 relative'>
      <div classname='screen-max-width'>
        <div className='mb-12 w-full '>
          <h1 id='feature_title' className='section-heading'>
            explore the full story
          </h1>
        </div>
        <div flex flex-col justify-center items-center overflow-hidden >
          <div className='mt-32 mb-24 pl-24'>
            <h1 className='text-5xl lg:text-7xl font-semibold'>iPhone</h1>
            <h1 className='text-5xl lg:text-7xl font-semibold'>Forged in titanium</h1>
          </div>
          <div className='flex-center flex-col sm:px-10'>
            <div className='relative h-[50vh] w-full flex items-center'>
              <video playsInline id='exploreVideo' className='w-full h-full object-cover object-center' preload='none' muted autoPlay ref={videoRef} >
                <source src='/src/utils/assets/videos/explore.mp4' type='video/mp4' />
              </video>
            </div>
            <div className='flex flex-col w-full relative'>
              <div className='feature-video-container'>
                <div className='overflow-hidden flex-1 h-[50]'>
                  <img src="/src/utils/assets/images/explore1.jpg" alt="titanium" className='feature-video g_grow' />
                </div>
                <div className='overflow-hidden flex-1 h-[50]'>
                  <img src="/src/utils/assets/images/explore2.jpg" alt="titanium 2" className='feature-video g_grow' />
                </div>
              </div>
              <div className='feature-text-container'>
                <div className='flex-1 flex-center'>
                  <p className='feature-text g_text'>
                    iPhone 15 Pro is {' '}
                    <span className='text-white'>
                    the first iPhone to feature an aerospace-grade titanium design
                    </span>,
                    using the same alloy that spacecrafts use for missions to Mars.
                  </p>
                </div>

                <div className='flex-1 flex-center'>
                  <p className='feature-text g_text'>
                    Titanium has the strength-to-weight ratio of any metal, these are  {' '}
                    <span className='text-white'>
                    lightest pro models ever
                    </span>,
                    you will notice the differece the moment you pick one up.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
