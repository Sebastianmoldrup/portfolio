export default function Projects() {
  return (
    <div className='flex flex-col justify-center items-center h-full bg-[#101115] text-white p-4 md:pt-6 md:px-8 text-3xl font-bold'>
      <div className='p-4 lg:w-1/3'>
        <div className='h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative'>
          <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
            CATEGORY
          </h2>
          <h1 className='title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3'>
            Raclette Blueberry Nextious Level
          </h1>
          <p className='leading-relaxed mb-3'>
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>
          <a className='text-indigo-500 inline-flex items-center'>
            Learn More
            <svg
              className='w-4 h-4 ml-2'
              viewBox='0 0 24 24'
              stroke='currentColor'
              stroke-width='2'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path d='M5 12h14'></path>
              <path d='M12 5l7 7-7 7'></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
