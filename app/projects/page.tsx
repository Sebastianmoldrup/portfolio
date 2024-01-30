import { GlobeIcon } from '@/components/Icons';
import Image from 'next/image';
export default function Projects() {
  return (
    <div className='flex flex-col justify-center items-center h-full bg-[#101115] text-white p-4 space-y-6 md:pt-6 md:px-8'>
      <h2 className='font-bold text-3xl'>[Flere prosjekter kommer snart]</h2>
      <div className='grid rounded-md place-items-center'>
        <a
          href='https://effektivmarkedsforing.no/'
          target='_blank'
          className='row-start-1 col-start-1 flex items-center px-2 gap-x-2 text-center bg-[#0f172aea] py-2 rounded-md hover:text-[#0f172aea] hover:bg-white hover:scale-110 z-10 hover:cursor-pointer'
        >
          <GlobeIcon />
          <div className='h-[20px]'>Effektivmarkedsforing.no</div>
        </a>
        <Image
          src='/effektivmarkedsforing.webp'
          width={400}
          height={400}
          alt='effektiv markefsførings frontside'
          className='rounded-md opacity-65 hover:opacity-75 row-start-1 col-start-1'
        />
      </div>
    </div>
  );
}
