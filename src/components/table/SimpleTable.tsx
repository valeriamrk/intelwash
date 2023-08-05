import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type TableProps = {
  data: Array<{
    kindOfData: string;
    code: number;
    userData?: string;
    timestamp?: string;
  }>;
};

const SimpleTable = ({ data }: TableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Тип данных</TableHead>
          <TableHead>Код ответа</TableHead>
          <TableHead>userData</TableHead>
          <TableHead>timestamp</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((el) => (
          <TableRow>
            <TableCell className="text-left">{el.kindOfData}</TableCell>
            <TableCell className="text-left">{el.code}</TableCell>
            <TableCell className="text-left">{el.userData}</TableCell>
            <TableCell className="text-left">{el.timestamp}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SimpleTable;
