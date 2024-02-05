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
    <div className='w-[320px]'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>Utdanning</TableHead>
            <TableHead>Skole/bedrift</TableHead>
            <TableHead>Utført</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className='font-medium'>
              Lærling med fullført fagbrev som boreoperatør
            </TableCell>
            <TableCell>Archer AS</TableCell>
            <TableCell>2018 - 2020</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className='font-medium'>Boreoperatørfaget VG3</TableCell>
            <TableCell>Bergen Maritime</TableCell>
            <TableCell>2018 - 2020</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className='font-medium'>Brønnteknikk VG2</TableCell>
            <TableCell>Bergen Maritime</TableCell>
            <TableCell>2017 - 2018</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className='font-medium'>Elektro VG1</TableCell>
            <TableCell>Bergen Maritime</TableCell>
            <TableCell>2016 - 2017</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
