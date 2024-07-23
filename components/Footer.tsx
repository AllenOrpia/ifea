import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='flex h-[100px] border-t-2 border-t-[#8A9A5B] py-10'>
      <section className='flex-1'>
        <h3 className='text-xl font-bold mb-5'>IFEA</h3>
      </section>
      <section className='flex-1'>
        <h3 className='text-xl font-bold mb-5'>Helpful Links</h3>
        <ul className='flex flex-col gap-2'>
          <Link href={'/'}>Home</Link>
          <Link href={'/works'}>Works</Link>
          <Link href={'/services'}>Services</Link>
          <Link href={'/contact'}>Contact</Link>
        </ul>

      </section>
      <section className='flex-1'>
        <h3 className='text-xl font-bold mb-5'>Social Links</h3>
      </section>
    </footer>
  )
}

export default Footer