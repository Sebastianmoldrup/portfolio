import { PhoneIcon, EmailIcon } from '../../components/Icons';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className='flex flex-col justify-center items-center h-full bg-[#101115] text-white p-4 md:pt-6 md:px-8'>
      <div className='flex flex-col md:flex-row'>
        <div className='bg-white text-black p-4 space-y-8 shadow-xl md:rounded-l-md rounded-t-md md:rounded-tr-none md:w-[300px] text-center'>
          <h2 className='text-xl font-semibold'>Kontakt meg</h2>
          <div className='space-y-2'>
            <div className='flex space-x-2'>
              <PhoneIcon /> <div>Telefon</div>:
            </div>
            <div className='bg-gray-200 md:rounded-md'>+47 41391174</div>
          </div>
          <div className='space-y-2'>
            <div className='flex space-x-2'>
              <EmailIcon /> <div>E-mail</div>:
            </div>
            <div className='bg-gray-200 rounded-md'>
              Sebastian.moldrup@gmail.com
            </div>
          </div>
        </div>
        <Image
          src='/bergenview.webp'
          width={300}
          height={300}
          alt='Picture of the author'
          className='md:rounded-r-md rounded-b-md md:rounded-bl-none'
        />
      </div>
    </div>
  );
}
