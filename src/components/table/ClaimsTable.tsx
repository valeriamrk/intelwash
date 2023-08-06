import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type ElementArrayTypes = Array<string>;
type TransformedDataTypes = Array<ElementArrayTypes>;

const ClaimsTable = ({ data }: any) => {
  const transformedDataForTable: TransformedDataTypes = Object.entries(data);
  return (
    <Table>
      <TableHeader>
        <TableRow className="h-4">
          <TableHead>Ключ</TableHead>
          <TableHead>Значение</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transformedDataForTable.map((el) => (
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
