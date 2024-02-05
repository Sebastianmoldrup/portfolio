import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';

export default function Home() {
  return (
    <main className='flex flex-col justify-center items-center h-full bg-[#101115] text-white p-4 md:pt-6 md:px-8'>
      <div className='flex md:flex-row items-center md:space-x-10 flex-col gap-6 space-y-2'>
        <div className='w-[300px] text-justify flex flex-col gap-y-2'>
          <h2 className='text-2xl font-semibold'>Litt om meg</h2>
          <div>
            Jeg er en engasjert og motivert person med lidenskap til å finne
            løsninger og bidra til å forme innovative ideer. Min tidligere
            erfaring som boreoperatør offshore har utviklet mine evner innen
            samarbeid, planlegging og prosedyrer, men har også styrket min evne
            til å trives både i teammiljøer og i selvstendige arbeidssettinger.
          </div>
          <div className='flex flex-col gap-y-4'>
            <a
              href=''
              target='_blank'
              className='flex items-center space-x-2 group'
            >
              <GithubIcon style='white' />
              <div className='group-hover:text-blue-200'>
                Privat konto - Siste prosjekter
              </div>
            </a>
            <a
              href=''
              target='_blank'
              className='flex items-center space-x-2 group'
            >
              <GithubIcon style='white' />
              <span className='group-hover:text-blue-200'>
                Kurs konto - Første prosjekter
              </span>
            </a>
          </div>
        </div>
        <video
          width='300px'
          height='533px'
          autoPlay
          loop
          muted
          preload='none'
          playsInline
          className='rounded-md'
        >
          <source src='/offshoreview.MP4' type='video/mp4' />
          Din browser støtter ikke videon
        </video>
      </div>
    </main>
  );
}
