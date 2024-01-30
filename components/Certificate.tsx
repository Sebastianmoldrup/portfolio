import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function Certificate() {
  return (
    <div className='w-[200px] p-2 bg-white text-black rounded h-fit'>
      <h2 className='text-xl'>Sertifikater</h2>
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Førekort</AccordionTrigger>
          <AccordionContent>Klasse B</AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>NOG 116</AccordionTrigger>
          <AccordionContent>Norsok standard R-003 & R-005 N</AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>Kranfører</AccordionTrigger>
          <AccordionContent>G11 / G4</AccordionContent>
          <AccordionContent>
            Modul 1.1 / O-1.1 / 2.3 / 2.7 / 3.7
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-4'>
          <AccordionTrigger>Livbåtfører</AccordionTrigger>
          <AccordionContent>FF48</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
