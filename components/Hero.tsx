import React from 'react';
import Image from 'next/image';
import heroImg from '@/public/hero-img.jpg';

const Hero = () => {
  return (
    <section className=' min-h-screen flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold mb-5'>Design your dream interior!</h1>
        <button className='p-3 border-2 btn bg-[#228B22] text-white hover:scale-125 active:scale-90 active:bg-[#8A9A5B] transition-all rounded-full'>Get Inspired</button>
    </section>
  )
}

export default Hero