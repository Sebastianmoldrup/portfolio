import { GlobeIcon } from '@/components/Icons';
import Image from 'next/image';
export default function Projects() {
  return (
    <div className='flex flex-col md:justify-center items-center h-full bg-[#101115] text-white p-4 gap-y-8 md:pt-6 md:px-8'>
      <h2 className='font-bold text-3xl'>[Flere prosjekter kommer snart]</h2>

      <h2 className='font-bold text-2xl'>Nyere Prosjekter</h2>

      <div className='flex flex-wrap gap-6 justify-center'>
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
            width={300}
            height={300}
            alt='effektiv markefsførings frontside'
            className='rounded-md opacity-65 hover:opacity-75 row-start-1 col-start-1'
          />
        </div>
      </div>

      <h2 className='font-bold text-2xl'>Kurs Prosjekter</h2>

      <div className='flex flex-wrap gap-6 justify-center'>
        <div className='grid rounded-md place-items-center'>
          <a
            href='https://sebastiankodehode.github.io/Portfolio/'
            target='_blank'
            className='row-start-1 col-start-1 flex items-center px-2 gap-x-2 text-center bg-[#0f172aea] py-2 rounded-md hover:text-[#0f172aea] hover:bg-white hover:scale-110 z-10 hover:cursor-pointer'
          >
            <GlobeIcon />
            <div className='h-[20px]'>Portfolio</div>
          </a>
          <Image
            src='/firstportfolio.webp'
            width={300}
            height={300}
            alt='first portfolio website'
            className='rounded-md opacity-65 hover:opacity-75 row-start-1 col-start-1'
          />
        </div>

        <div className='grid rounded-md place-items-center'>
          <a
            href='https://sebastiankodehode.github.io/Metric-Imperial-Unit-Converter/'
            target='_blank'
            className='row-start-1 col-start-1 flex items-center px-2 gap-x-2 text-center bg-[#0f172aea] py-2 rounded-md hover:text-[#0f172aea] hover:bg-white hover:scale-110 z-10 hover:cursor-pointer'
          >
            <GlobeIcon />
            <div className='h-[20px]'>Unit converter</div>
          </a>
          <Image
            src='/unitconverterv1.webp'
            width={300}
            height={300}
            alt='unit converter website'
            className='rounded-md opacity-65 hover:opacity-75 row-start-1 col-start-1'
          />
        </div>

        <div className='grid rounded-md place-items-center'>
          <a
            href='https://sebastiankodehode.github.io/Random-Password-Generator/'
            target='_blank'
            className='row-start-1 col-start-1 flex items-center px-2 gap-x-2 text-center bg-[#0f172aea] py-2 rounded-md hover:text-[#0f172aea] hover:bg-white hover:scale-110 z-10 hover:cursor-pointer'
          >
            <GlobeIcon />
            <div className='h-[20px]'>Passord generator</div>
          </a>
          <Image
            src='/passwordgenerator.webp'
            width={300}
            height={300}
            alt='random password generator website'
            className='rounded-md opacity-65 hover:opacity-75 row-start-1 col-start-1'
          />
        </div>

        <div className='grid rounded-md place-items-center'>
          <a
            href='https://sebastiankodehode.github.io/Drumkit/'
            target='_blank'
            className='row-start-1 col-start-1 flex items-center px-2 gap-x-2 text-center bg-[#0f172aea] py-2 rounded-md hover:text-[#0f172aea] hover:bg-white hover:scale-110 z-10 hover:cursor-pointer'
          >
            <GlobeIcon />
            <div className='h-[20px]'>Drumkit - første lyd fil prosjekt</div>
          </a>
          <Image
            src='/drumkit.webp'
            width={300}
            height={300}
            alt='drumkit website'
            className='rounded-md opacity-65 hover:opacity-75 row-start-1 col-start-1'
          />
        </div>

        <div className='grid rounded-md place-items-center'>
          <a
            href='https://sebastiankodehode.github.io/Pokemon-Api/'
            target='_blank'
            className='row-start-1 col-start-1 flex items-center px-2 gap-x-2 text-center bg-[#0f172aea] py-2 rounded-md hover:text-[#0f172aea] hover:bg-white hover:scale-110 z-10 hover:cursor-pointer'
          >
            <GlobeIcon />
            <div className='h-[20px]'>Pokemon API - første api prosjekt</div>
          </a>
          <Image
            src='/pokemonapi.webp'
            width={300}
            height={300}
            alt='pokemon website'
            className='rounded-md opacity-65 hover:opacity-75 row-start-1 col-start-1'
          />
        </div>

        <div className='grid rounded-md place-items-center'>
          <a
            href='https://sebastiankodehode.github.io/Todo-List/'
            target='_blank'
            className='row-start-1 col-start-1 flex items-center px-2 gap-x-2 text-center bg-[#0f172aea] py-2 rounded-md hover:text-[#0f172aea] hover:bg-white hover:scale-110 z-10 hover:cursor-pointer'
          >
            <GlobeIcon />
            <div className='h-[20px]'>Todo list v1</div>
          </a>
          <Image
            src='/todolistv1.webp'
            width={300}
            height={300}
            alt='todolist v1 website'
            className='rounded-md opacity-65 hover:opacity-75 row-start-1 col-start-1'
          />
        </div>

        <div className='grid rounded-md place-items-center'>
          <a
            href='https://sebastiankodehode.github.io/Todo-List-v2/'
            target='_blank'
            className='row-start-1 col-start-1 flex items-center px-2 gap-x-2 text-center bg-[#0f172aea] py-2 rounded-md hover:text-[#0f172aea] hover:bg-white hover:scale-110 z-10 hover:cursor-pointer'
          >
            <GlobeIcon />
            <div className='h-[20px]'>Todolist v2</div>
          </a>
          <Image
            src='/todolistv2.webp'
            width={300}
            height={300}
            alt='todolist v2 website'
            className='rounded-md opacity-65 hover:opacity-75 row-start-1 col-start-1'
          />
        </div>
      </div>
    </div>
  );
}
