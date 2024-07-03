import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? '/src/utils/assets/videos/smallHero.mp4' : '/src/utils/assets/videos/hero.mp4'
  );

  useEffect(() => {
    const handleResize = () => {
      setVideoSrc(window.innerWidth < 760 ? '/src/utils/assets/videos/smallHero.mp4' : '/src/utils/assets/videos/hero.mp4');
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 1.5 });
    gsap.to('#cta', {opacity:1,y:-50,delay:2.5})
  }, []);

  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex-center flex-col'>
        <p id='hero' className='hero-title'>iPhone 15 Pro</p>
        <div className='md:w-10/12 w-9/12'>
          <video autoPlay muted playsInline key={videoSrc} className="w-full pointer-events-none">
            <source src={videoSrc} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
        <a href="#highlights" className='btn'>Buy</a>
        <p className='font-normal text-xl'>From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
