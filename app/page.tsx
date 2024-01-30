import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex flex-col justify-center items-center min-h-screen bg-[#101115] text-white p-4 md:py-6 md:px-8'>
      <div className='flex flex-col md:flex-row items-center md:space-x-10'>
        <div className='md:w-[300px] text-justify'>
          <h2 className='text-xl font-semibold'>Litt om meg</h2>
          <div>
            Jeg er en engasjert og motivert person med lidenskap til å finne
            løsninger og bidra til å forme innovative ideer. Min tidligere
            erfaring som boreoperatør offshore har utviklet mine evner innen
            samarbeid, planlegging og prosedyrer, men har også styrket min evne
            til å trives både i teammiljøer og i selvstendige arbeidssettinger.
          </div>
        </div>
        <video
          width='200px'
          height='300px'
          autoPlay
          loop
          muted
          preload='none'
          className='rounded-md'
        >
          <source src='/offshoreview.MP4' type='video/mp4' />
          Din browser støtter ikke videon
        </video>
      </div>
    </main>
  );
}
