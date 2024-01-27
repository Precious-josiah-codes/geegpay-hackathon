import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const TableComp = ({ invoices }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="text-gray-400 text-sm font-medium">
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Invoice</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice} className="text-sm">
            <TableCell className="font-medium flex items-center space-x-4 w-[220px] text-gray-700 ">
              <div className="w-[38px] h-[38px] rounded-full overflow-hidden">
                <Image
                  src={invoice.avatar}
                  alt="profile"
                  width={38}
                  height={38}
                  priority
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>

              <h1>{invoice.name}</h1>
            </TableCell>
            <TableCell className="text-neutral-500  font-normal">
              {invoice.date}
            </TableCell>
            <TableCell className="text-slate-900  font-medium">
              {invoice.amount}
            </TableCell>
            <TableCell
              className={`  font-normal ${
                invoice.status === "Paid" ? "text-emerald-400" : "text-red-500"
              }`}
            >
              {invoice.status}
            </TableCell>
            <TableCell>
              <div className="flex items-center space-x-3">
                <Image
                  src="/invoice.svg"
                  alt="Date Logo"
                  width={16}
                  height={16}
                  priority
                />
                <h1 className="text-slate-900  font-normal">View</h1>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableComp;
