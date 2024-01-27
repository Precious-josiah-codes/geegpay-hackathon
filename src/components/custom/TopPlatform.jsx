import { Progress } from "../ui/progress";

const TopPlatform = ({ platform }) => {
  return (
    <div className="space-y-6 bg-white p-4 rounded-[14px] border border-slate-100 sm:p-0 sm:rounded-none sm:border-none">
      <h1 className="text-zinc-800 text-base sm:text-sm font-semibold">
        {platform.title}
      </h1>
      <Progress
        value={platform.progress}
        color={platform.color}
        className="h-3"
      />

      <div className="flex justify-between text-neutral-600 text-base sm:text-sm font-normal ">
        <h1 className="">{platform.price}</h1>
        <h1>{platform.percentage}</h1>
      </div>
    </div>
  );
};

export default TopPlatform;
