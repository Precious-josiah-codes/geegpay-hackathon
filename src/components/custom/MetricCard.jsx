import Image from "next/image";

const MetricCard = ({ metric }) => {
  // w-[14.94rem]
  return (
    <div className="bg-white  h-[200px] flex flex-col justify-between p-4 rounded-[14px] border border-slate-100">
      {/* icon and trend image */}
      <div className="flex items-center justify-between">
        {/* metric icon */}
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden border border-neutral-200 flex items-center justify-center">
          <Image
            src={metric.icon}
            alt="Date Logo"
            width={20}
            height={20}
            priority
          />
        </div>

        {/* trend */}
        <Image
          src={metric.trend}
          alt="trend"
          width={104}
          height={32}
          priority
        />
      </div>

      {/* title */}
      <h1 className="text-zinc-500 text-lg font-medium">{metric.title}</h1>

      {/* price */}
      <h1 className=" text-gray-700 text-2xl font-semibold">{metric.price}</h1>

      {/* trend percentage and date */}
      <div className="flex items-center justify-between">
        {/* trend percentage */}
        <div
          className={`flex items-center ${
            metric.positive ? "bg-emerald-100" : "bg-red-100"
          }  px-2 py-1 rounded-full space-x-2`}
        >
          {/* icon */}
          <Image
            src={metric.trendIcon}
            alt="trend"
            width={9}
            height={5}
            priority
          />

          <h1
            className={`${
              metric.positive ? "text-emerald-400" : "text-red-400"
            } text-xs font-medium`}
          >
            23.5%
          </h1>
        </div>

        {/* date */}
        <h1 className="text-zinc-600 text-sm font-normal">
          vs. previous month
        </h1>
      </div>
    </div>
  );
};

export default MetricCard;
