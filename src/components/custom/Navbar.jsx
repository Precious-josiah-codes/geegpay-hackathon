import { AlignLeft, Search } from "lucide-react";
import { Input } from "../ui/input";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "./sidebar";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-[88px]  sticky top-0 z-50  backdrop-blur-lg px-6 border-b border-slate-200 sm:px-0  sm:border-none">
      {/* right section */}
      {/* logo */}
      <div className="sm:w-20 h-full flex justify-center sm:border-r sm:border-slate-200 ">
        <Image src="/logo.svg" alt="Logo" width={35} height={35} priority />
      </div>

      {/* left section for desktop */}
      <div className="hidden sm:flex flex-1 h-full items-center justify-between px-6 border-b border-slate-200">
        <h1 className="text-zinc-800 text-xl font-semibold">Dashboard</h1>
        <div className="flex justify-between items-center space-x-9 ">
          {/* search input */}
          <div className="relative flex space-x-4 h-fit">
            <Input
              type="text"
              placeholder="Search..."
              className="rounded-3xl w-[15rem] pl-9 bg-white border border-zinc-300  focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-slate-950 focus-visible:ring-offset-0"
            />
            {/* search icon */}
            <div
              className={`absolute inset-y-0 left-0  py-2 focus:outline-none inline-flex items-center`}
            >
              <Search className="h-4 w-4 text-[#a8a8a8]" />
            </div>
          </div>

          {/* date */}
          <div className="flex items-center space-x-3">
            <Image
              src="/calendar.svg"
              alt="Date Logo"
              width={20}
              height={20}
              priority
            />
            <h1 className="text-sm">November 15, 2023</h1>
          </div>

          {/* notification and profile */}
          <div className="flex items-center space-x-6">
            {/* notification */}
            <div className="w-[40px] h-[40px] rounded-full border border-zinc-300 flex justify-center items-center">
              <Image
                src="/bell.svg"
                alt="Bell"
                width={20}
                height={20}
                priority
              />
            </div>

            {/* profile */}
            <div className="flex items-center space-x-3  px-2 py-1.5 rounded-[28px] border border-zinc-300">
              <div className="w-[38px] h-[38px] rounded-full overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Date Logo"
                  width={38}
                  height={38}
                  priority
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>

              <div>
                <h1 className="text-base text-zinc-800 text-right">
                  Justin Bergson
                </h1>
                <h1 className="text-sm text-zinc-500">Justin@gmail.com</h1>
              </div>

              <Image
                src="/arrow_down.svg"
                alt="Date Logo"
                width={20}
                height={20}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* left section for mobile */}
      <div className="sm:hidden flex items-center space-x-6">
        {/* profile */}
        <Popover>
          <PopoverTrigger>
            <div className="flex items-center space-x-3">
              <div className="w-[38px] h-[38px] rounded-full overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Date Logo"
                  width={38}
                  height={38}
                  priority
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>

              <Image
                src="/arrow_down.svg"
                alt="Date Logo"
                width={20}
                height={20}
                priority
              />
            </div>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-2 space-y-4">
              {/* profile */}
              <div className="flex justify-between items-center space-x-3   py-1.5">
                <div className="w-[38px] h-[38px] rounded-full overflow-hidden">
                  <Image
                    src="/profile.jpg"
                    alt="Date Logo"
                    width={38}
                    height={38}
                    priority
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div>
                  <h1 className="text-base text-zinc-800 text-right">
                    Justin Bergson
                  </h1>
                  <h1 className="text-sm text-zinc-500">Justin@gmail.com</h1>
                </div>
              </div>

              {/* notification */}
              <div className=" flex justify-between items-center">
                <div className="w-[40px] h-[40px] rounded-full border border-zinc-300 flex justify-center items-center">
                  {" "}
                  <Image
                    src="/bell.svg"
                    alt="Bell"
                    width={20}
                    height={20}
                    priority
                  />
                </div>

                <h1>Notification</h1>
              </div>

              {/* date */}
              <div className="flex justify-between items-center">
                <div className="w-[40px] h-[40px] rounded-full border border-zinc-300 flex justify-center items-center">
                  {" "}
                  <Image
                    src="/calendar.svg"
                    alt="Bell"
                    width={20}
                    height={20}
                    priority
                  />
                </div>

                <h1 className="text-sm">November 15, 2023</h1>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* hamburger */}

        <div>
          <Sheet>
            <SheetTrigger>
              <AlignLeft />
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-20 bg-[#F7F8FA] border-r border-slate-200"
            >
              <Sidebar />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
