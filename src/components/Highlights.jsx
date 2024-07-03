import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import VideoCarousel from './VideoCarousel';

const Highlights = () => {
  
  useGSAP (()=>{
    gsap.to('#title',{opacity:1,y:0})
    gsap.to('.link',{opacity:1,y:0,duration:1,stagger:0.25})
  },[])
  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc-900'>
      <div className='screen max-width'>
        <div className='mb-12 flex w-full md:flex items-end justify-between'>
          <h1 id='title' className='section-heading'>Get the highlights</h1>
          <div className='flex flex-wrap items-end gap-5'>
            <p className='link flex items -center'>
              watch the film
              <img src="/src/utils/assets/images/watch.svg" alt="watch" className='ml-2' />
            </p>
            <p className='link flex items -center'>
              watch the events
              <img src="/src/utils/assets/images/right.svg" alt="right" className='ml-2' />
            </p>

          </div>
        </div>
        <VideoCarousel/>
      </div>
    </section>
  );
};

export default Highlights;
