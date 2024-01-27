import Image from "next/image";

const TableCard = ({ invoice }) => {
  return (
    <div className="bg-white space-y-4 p-6 rounded-[14px] border border-slate-100">
      <div className="flex items-center justify-between">
        <div className="font-medium flex items-center space-x-4 text-gray-700 text-base">
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
        </div>

        {/* view invoice */}
        <div className="flex items-center space-x-3">
          <Image
            src="/invoice.svg"
            alt="Date Logo"
            width={16}
            height={16}
            priority
          />
          <h1 className="text-slate-900 text-sm font-normal">View</h1>
        </div>
      </div>

      {/* date */}
      <div className="flex justify-between">
        <h1>Date</h1>
        <h1>{invoice.date}</h1>
      </div>
      {/* amount */}
      <div className="flex justify-between">
        <h1>Amount</h1>
        <h1>{invoice.amount}</h1>
      </div>
      {/* status */}
      <div className="flex justify-between">
        <h1>Status</h1>
        <h1
          className={` ${
            invoice.status === "Paid" ? "text-emerald-400" : "text-red-500"
          }`}
        >
          {invoice.status}
        </h1>
      </div>
    </div>
  );
};

export default TableCard;
