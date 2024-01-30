import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer';

import { Button } from '@/components/ui/button';
import { HamburgerIcon } from './Icons';
import Link from 'next/link';

export default function Navigation() {
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

      <Drawer>
        <DrawerTrigger>
          <HamburgerIcon />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <Button>
              <Link href='/'>Hjem</Link>
            </Button>
            <Button>
              <Link href='/experience'>Erfaring</Link>
            </Button>
            <Button>
              <Link href='/projects'>Prosjekter</Link>
            </Button>
            <Button>
              <Link href='/contact'>Kontakt</Link>
            </Button>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose>
              <Button variant='outline'>Lukk meny</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </nav>
  );
}
