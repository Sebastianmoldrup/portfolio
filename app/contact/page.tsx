import { GithubIcon, PhoneIcon, EmailIcon } from '../../components/Icons';
export default function Contact() {
  return (
    <div className='flex flex-col justify-center items-center h-full bg-[#101115] text-white p-4 md:pt-6 md:px-8'>
      <div className='bg-white text-black p-4 space-y-4 shadow-xl rounded-md'>
        <h2 className='text-xl font-semibold'>Kontakt meg</h2>
        <div>
          <div className='flex space-x-2'>
            <PhoneIcon /> <div>Telefon</div>:
          </div>
          <div>+47 41391174</div>
        </div>
        <div>
          <div className='flex space-x-2'>
            <EmailIcon /> <div>E-mail</div>:
          </div>
          <div>Sebastian.moldrup@gmail.com</div>
        </div>
      </div>
    </div>
  );
}
