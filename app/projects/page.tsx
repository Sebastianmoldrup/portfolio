import Project from '@/components/Project';
export default function Projects() {
  return (
    <div className='flex flex-col md:justify-center items-center h-full bg-[#101115] text-white p-4 gap-y-8 md:pt-6 md:px-8'>
      <h2 className='font-bold text-3xl'>[Flere prosjekter kommer snart]</h2>

      <h2 className='font-bold text-2xl'>Nyere Prosjekter</h2>

      <div className='flex flex-wrap gap-6 justify-center'>
        <Project
          title='Effektivmarkedsforing.no'
          link='https://effektivmarkedsforing.no/'
          alt='effektiv markefsforings website'
          src='/effektivmarkedsforing.webp'
        />

        <Project
          title='emdocs.vercel.app'
          link='https://emdocs.vercel.app/'
          alt='effektiv markefsforings shortcode docs'
          src='/emdocs.webp'
        />
      </div>

      <h2 className='font-bold text-2xl'>
        Kurs Prosjekter [Blant de første jeg lagde]
      </h2>

      <div className='flex flex-wrap gap-6 justify-center'>
        <Project
          title='Portfolio'
          link='https://sebastiankodehode.github.io/Portfolio/'
          alt='first portfolio website'
          src='/firstportfolio.webp'
        />

        <Project
          title='Unit converter'
          link='https://sebastiankodehode.github.io/Metric-Imperial-Unit-Converter/'
          alt='unit converter website'
          src='/unitconverterv1.webp'
        />

        <Project
          title='Password generator'
          link='https://sebastiankodehode.github.io/Random-Password-Generator/'
          alt='random password generator website'
          src='/passwordgenerator.webp'
        />

        <Project
          title='Drumkit'
          link='https://sebastiankodehode.github.io/Drumkit/'
          alt='drumkit website'
          src='/drumkit.webp'
        />

        <Project
          title='Pokemon API'
          link='https://sebastiankodehode.github.io/Pokemon-Api/'
          alt='pokemon website'
          src='/pokemonapi.webp'
        />

        <Project
          title='Todo list v1'
          link='https://sebastiankodehode.github.io/Todo-List/'
          alt='todolist v1 website'
          src='/todolistv1.webp'
        />

        <Project
          title='Todo list v2'
          link='https://sebastiankodehode.github.io/Todo-List-v2/'
          alt='todolist v2 website'
          src='/todolistv2.webp'
        />
      </div>
    </div>
  );
}
