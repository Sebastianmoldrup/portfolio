'use client';
import Courses from '@/components/Courses';
import Work from '@/components/Work';
import Programming from '@/components/Programming';
import { ReactIcon } from '@/components/Icons';
import { useState } from 'react';

export default function Experience() {
  const [container, setContainer] = useState(1);

  return (
    <main className='flex justify-center items-start space-y-10 min-h-screen w-full bg-[#101115] text-white md:py-6 md:px-8'>
      <div className='flex flex-col md:flex-row md:items-start items-center md:space-x-12 mt-10 space-y-6'>
        <div className='w-[300px] md:w-[450px] px-4 space-y-4'>
          <h3 className='text-2xl font-semibold text-center'>Min erfaring</h3>
          <div>
            For tiden jobber jeg som lærling hos Effektiv Markedsføring i
            Bergen. I denne stillingen er jeg ansvarlig for blant annet å skape
            skreddersydde løsninger gjennom utvikling av plugins. Støtte
            kollegaer ved å tilby ferdiglagde design- og innholdsløsninger, noe
            som gir dem effektive verktøy for raskt å bygge og tilpasse
            nettsider. SEO er også en viktig del av digital markedsføring så
            HTML semantics, testing og code review er noe jeg har blitt godt
            kjent med. Når det kommer til javascript har jeg jobbet med React,
            NextJS og Astro.build. Jeg har utviklet nettsiden til Effektiv
            Markedsføring (effektivmarkedsforing.no) med Astro.build.
          </div>
        </div>

        <div className='flex flex-col space-y-6 w-[400px]'>
          <ul className='flex justify-center space-x-6 group'>
            <li
              onClick={() => {
                setContainer(1);
              }}
              className={
                container === 1
                  ? 'flex items-center bg-white text-black px-2 py-1 rounded-md hover:cursor-pointer group-hover:bg-transparent group-hover:text-white group-hover:border-white border-2'
                  : 'flex items-center px-2 py-1 hover:bg-white hover:text-black hover:rounded-md hover:cursor-pointer border-2 border-transparent'
              }
            >
              Utvikling
            </li>
            <li
              onClick={() => {
                setContainer(2);
              }}
              className={
                container === 2
                  ? 'flex items-center bg-white text-black px-2 py-1 rounded-md hover:cursor-pointer group-hover:bg-transparent group-hover:text-white group-hover:border-white border-2'
                  : 'flex items-center px-2 py-1 hover:bg-white hover:text-black hover:rounded-md hover:cursor-pointer border-2 border-transparent'
              }
            >
              Arbeidserfaring
            </li>
            <li
              onClick={() => {
                setContainer(3);
              }}
              className={
                container === 3
                  ? 'flex items-center bg-white text-black px-2 py-1 rounded-md hover:cursor-pointer group-hover:bg-transparent group-hover:text-white group-hover:border-white border-2'
                  : 'flex items-center px-2 py-1 hover:bg-white hover:text-black hover:rounded-md hover:cursor-pointer border-2 border-transparent'
              }
            >
              Kurs
            </li>
          </ul>
          <div className='flex flex-col items-center'>
            <div className={container === 1 ? 'block' : 'hidden'}>
              <Programming />
            </div>
            <div className={container === 2 ? 'block' : 'hidden'}>
              <Work />
            </div>
            <div className={container === 3 ? 'block' : 'hidden'}>
              <Courses />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function ProgrammingList({ list, title }: { list: string[]; title: string }) {
  return (
    <div className=''>
      <h3>{title}</h3>
      <ul className='flex flex-wrap gap-x-4'>
        {list.map((item) => {
          return (
            <li key={item} className='font-semibold'>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
