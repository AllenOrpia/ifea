import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='h-[100px] py-10 border-b-2 border-b-[#8A9A5B] '>
      <nav className='flex justify-between'>
        <span className='flex-1'>IFEA</span>
        <div className='flex-1 flex items-center justify-end gap-5'>
            <Link href={'/'}>Home</Link>
            <Link href={'/works'}>Works</Link>
            <Link href={'/services'}>Services</Link>
            <Link href={'/contact'}>Contact</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header