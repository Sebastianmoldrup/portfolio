import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function Courses() {
  return (
    <div className='lg:border-l-2 lg:pl-6'>
      <h2 className='text-center text-xl font-semibold py-2'>Kurs</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>Kurs</TableHead>
            <TableHead>Bedrift</TableHead>
            <TableHead>Utført</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className='font-medium'>AMO IT</TableCell>
            <TableCell>Kodehode</TableCell>
            <TableCell>2021</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className='font-medium'>
              Container pakkekurs NOG 116
            </TableCell>
            <TableCell>CCB Mongstad</TableCell>
            <TableCell>2020</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className='font-medium'>Livbåtførerkurs FF48</TableCell>
            <TableCell>Nosefo</TableCell>
            <TableCell>2019</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className='font-medium'>
              Grunnleggende sikkerhets- og beredskapskurs
            </TableCell>
            <TableCell>Nosefo</TableCell>
            <TableCell>2018</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className='font-medium'>Riggerkurs</TableCell>
            <TableCell>Biks AS</TableCell>
            <TableCell>2018</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className='font-medium'>
              Norsk Standard R-003 og R-005 N
            </TableCell>
            <TableCell>Biks AS</TableCell>
            <TableCell>2018</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className='font-medium'>
              Fastmontert hydraulisk kran G20F
            </TableCell>
            <TableCell>Biks AS</TableCell>
            <TableCell>2018</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className='font-medium'>G4, G11</TableCell>
            <TableCell>Kranførerskolen</TableCell>
            <TableCell>2018</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className='font-medium'>
              Modul 2.3, 2.7, 3.7, O-1.1
            </TableCell>
            <TableCell>Kranførerskolen</TableCell>
            <TableCell>2018</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
