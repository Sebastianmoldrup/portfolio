import Courses from '@/components/Courses';
import { ReactIcon } from '@/components/Icons';
import Work from '@/components/Work';

export default function Experience() {
  return (
    <main className='flex flex-col justify-center items-center space-y-10 min-h-screen w-full bg-[#101115] text-white md:py-6 md:px-8'>
      <div className='border-b-2 pb-4 space-y-4'>
        <h2 className='text-2xl font-semibold text-center'>Utvikling</h2>
        <div className='space-y-4'>
          <ProgrammingList
            title='Språk'
            list={[
              'Javascript',
              'Typescript',
              'HTML',
              'CSS',
              'TailwindCSS',
              'PHP',
              'MDX',
            ]}
          />

          <ProgrammingList
            title='Rammeverk'
            list={['React', 'Next', 'Astro', 'Wordpress']}
          />

          <ProgrammingList title='Cloud' list={['Vercel']} />

          <ProgrammingList title='Database' list={['Supabase']} />

          <ProgrammingList title='Versjonskontroll' list={['Github', 'Git']} />

          <ProgrammingList title='Design' list={['Figma', 'Krita']} />
        </div>
      </div>
      <div className='lg:flex lg:items-center lg:justify-center lg:space-x-14 space-y-14 lg:space-y-0 w-full'>
        <div className='flex flex-col space-y-14'>
          <div className='self-center md:w-[500px] px-4 space-y-4'>
            <h3 className='text-2xl font-semibold text-center'>Min erfaring</h3>
            <div>
              For tiden jobber jeg som lærling hos Effektiv Markedsføring i
              Bergen. I denne stillingen er jeg ansvarlig for blant annet å
              skape skreddersydde løsninger gjennom utvikling av plugins. Støtte
              kollegaer ved å tilby ferdiglagde design- og innholdsløsninger,
              noe som gir dem effektive verktøy for raskt å bygge og tilpasse
              nettsider. SEO er også en viktig del av digital markedsføring så
              HTML semantics, testing og code review er noe jeg har blitt godt
              kjent med. Når det kommer til javascript har jeg jobbet med React,
              NextJS og Astro.build. Jeg har utviklet nettsiden til Effektiv
              Markedsføring (effektivmarkedsforing.no) med Astro.build.
            </div>
          </div>
          <Work />
        </div>
        <Courses />
      </div>
    </main>
  );
}

function ProgrammingList({ list, title }: { list: string[]; title: string }) {
  return (
    <div className='px-4'>
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
