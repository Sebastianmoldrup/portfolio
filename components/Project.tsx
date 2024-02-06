import { GlobeIcon } from '@/components/Icons';
import Image from 'next/image';

export default function Project({
  title,
  link,
  alt,
  src,
}: {
  title: string;
  link: string;
  alt: string;
  src: string;
}) {
  return (
    <div className='grid rounded-md place-items-center'>
      <a
        href={link}
        target='_blank'
        className='row-start-1 col-start-1 gap-x-2 rounded-md flex items-center bg-[#0f172aea] px-4 py-2 opacity-100 z-10 hover:text-[#0f172aea] hover:bg-white hover:scale-110'
      >
        <GlobeIcon />
        <div className='flex items-center leading-none'>{title}</div>
      </a>
      <Image
        src={src}
        width={300}
        height={300}
        alt={alt}
        className='rounded-md opacity-65 hover:opacity-75 row-start-1 col-start-1'
      />
    </div>
  );
}
