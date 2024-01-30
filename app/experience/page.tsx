import { Certificate } from '@/components/Certificate';
import Courses from '@/components/Courses';
import Work from '@/components/Work';

export default function Experience() {
  return (
    <main className='flex flex-col justify-center items-center space-y-10 min-h-screen bg-[#101115] text-white p-4 md:py-6 md:px-8'>
      <div className='lg:flex lg:items-center lg:space-x-14 space-y-14 lg:space-y-0 w-full'>
        <div className='space-y-14'>
          <div className='md:w-[500px]'>
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
          <Work />
        </div>
        <Courses />
      </div>
    </main>
  );
}
