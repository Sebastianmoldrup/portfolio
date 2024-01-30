import { PhoneIcon, EmailIcon } from '../../components/Icons';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className='flex justify-center items-center'>
      <div className='absolute inset-0 bg-gray-300 -z-10'>
        <iframe
          width='100%'
          height='100%'
          title='map'
          src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26523.330815202866!2d5.3128765949302155!3d60.389758808408274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sno!2sno!4v1706648260996!5m2!1sno!2sno" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
          style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
        ></iframe>
      </div>
      <div className='container px-5 py-24 mx-auto flex w-full h-full justify-center items-center mt-20'>
        <div className='bg-white text-black p-6 space-y-8 shadow-xl md:rounded-l-md rounded-t-md md:rounded-tr-none md:w-[300px] text-center'>
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
      </div>
    </div>
  );
}
