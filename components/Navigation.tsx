'use client';

import { useState } from 'react';
import { HamburgerIcon, CloseIcon } from './Icons';
import Link from 'next/link';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const linkStyling =
    'w-[200px] text-center bg-[#0f172aea] py-2 rounded-md hover:text-[#0f172aea] hover:bg-white hover:scale-110';

  return (
    <nav className='flex justify-between items-center w-full bg-[#101115] text-white p-4 md:py-6 md:px-8'>
      <h1 className='text-2xl'>Sebastian Møldrup</h1>

      <ul className='hidden md:flex space-x-8 text-xl'>
        <li className='hover:scale-125 hover:cursor-pointer'>
          <Link href='/'>Hjem</Link>
        </li>
        <li className='hover:scale-125 hover:cursor-pointer'>
          <Link href='/experience'>Erfaring</Link>
        </li>
        <li className='hover:scale-125 hover:cursor-pointer'>
          <Link href='/projects'>Prosjekter</Link>
        </li>
        <li className='hover:scale-125 hover:cursor-pointer'>
          <Link href='/contact'>Kontakt</Link>
        </li>
      </ul>

      <div className='md:hidden' onClick={() => setOpen(!open)}>
        <HamburgerIcon />
      </div>

      <div
        className={`md:hidden ${
          open ? 'fixed left-0 w-full h-full top-0 bg-[#101115] z-10' : 'hidden'
        }`}
      >
        <div className='w-full h-full flex flex-col p-4'>
          <div
            className='self-end hover:cursor-pointer'
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </div>
          <ul className='flex flex-col h-full space-y-6 self-center mt-32'>
            <Link href='/' onClick={() => setOpen(false)}>
              <li className={linkStyling}>Hjem</li>
            </Link>
            <Link href='/experience' onClick={() => setOpen(false)}>
              <li className={linkStyling}>Erfaring</li>
            </Link>

            <Link href='/projects' onClick={() => setOpen(false)}>
              <li className={linkStyling}>Prosjekter</li>
            </Link>

            <Link href='/contact' onClick={() => setOpen(false)}>
              <li className={linkStyling}>Kontakt</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
