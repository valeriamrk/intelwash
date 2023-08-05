import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ClaimsTable = ({ data }: any) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="h-4">
          <TableHead>Ключ</TableHead>
          <TableHead>Значение</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.entries(data).map((el) => (
          <TableRow key={el[0]} className="p-px">
            <TableCell className="text-left p-px">{el[0]}</TableCell>
            <TableCell className="text-left p-px">{el[1]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ClaimsTable;
