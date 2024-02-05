import {
  JavascriptIcon,
  TypescriptIcon,
  HtmlIcon,
  PhpIcon,
  CssIcon,
  MdxIcon,
  TailwindIcon,
  ReactIcon,
  NextIcon,
  AstroIcon,
  WordpressIcon,
  VercelIcon,
  GithubIcon,
  GitIcon,
  FigmaIcon,
  KritaIcon,
  SupabaseIcon,
} from '@/components/Icons';

import React, { ReactElement } from 'react';

export default function Programming() {
  const categories = {
    Frontend: ['JavaScript', 'TypeScript', 'React', 'Next', 'Astro'],
    Backend: ['PHP', 'Supabase', 'Wordpress'],
    Styling: ['CSS', 'TailwindCSS'],
    Markup: ['HTML', 'MDX'],
    Skyløsning: ['Vercel'],
    Versjonskontroll: ['Github', 'Git'],
    Design: ['Figma', 'Krita'],
  };

  type SvgType = {
    [key: string]: ReactElement;
  };

  const svg: SvgType = {
    JavaScript: <JavascriptIcon />,
    TypeScript: <TypescriptIcon />,
    HTML: <HtmlIcon />,
    CSS: <CssIcon />,
    TailwindCSS: <TailwindIcon />,
    PHP: <PhpIcon />,
    MDX: <MdxIcon />,
    React: <ReactIcon />,
    Next: <NextIcon />,
    Astro: <AstroIcon />,
    Wordpress: <WordpressIcon />,
    Supabase: <SupabaseIcon />,
    Vercel: <VercelIcon />,
    Github: <GithubIcon />,
    Git: <GitIcon />,
    Figma: <FigmaIcon />,
    Krita: <KritaIcon />,
  };

  return (
    <div className=''>
      {Object.entries(categories).map(([category, languages]) => (
        <div className='w-[320px] mb-4' key={category}>
          <h3 className='text-2xl font-semibold'>{category}</h3>
          <ul className='flex bg-white text-black space-x-4 rounded-md px-2 py-1'>
            {languages.map((language) => (
              <li
                className='flex flex-col space-y-1 items-center'
                key={language}
              >
                {svg[language]}
                <span className='text-sm font-semibold'>{language}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
