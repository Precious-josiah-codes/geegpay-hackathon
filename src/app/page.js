"use client";

import BarCharts from "@/components/custom/BarChart";
import Navbar from "@/components/custom/Navbar";
import Sidebar from "@/components/custom/sidebar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MetricCard from "@/components/custom/MetricCard";
import TableComp from "@/components/custom/Table";
import TopPlatform from "@/components/custom/TopPlatform";
import { lastOrders, metricCard, topPlatform } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import TableCard from "@/components/custom/TableCard";

export default function Home() {
  return (
    <main className="relative w-full h-[190vh] 2xl:h-full bg-neutral-50">
      <section className=" relative ">
        <Navbar />

        <div className="sm:flex hidden">
          <aside className="w-20 h-[100vh] scrollbar bg-[#F7F8FA] border-r border-slate-200 sticky top-0">
            <Sidebar />
          </aside>

          <div className="flex-1 px-6 mt-9 ">
            {/* start chart and metric section */}
            <section className="flex h-[70vh] 2xl:h-[40vh] relative space-x-4 ">
              {/* start bar chart */}
              <section className="flex-1 bg-white h-[70vh] 2xl:h-[40vh] p-4  border border-slate-100 rounded-[14px]">
                <div className="flex items-center justify-between mb-10">
                  <h1 className="text-zinc-800 text-lg font-semibold">
                    Sales Trend
                  </h1>
                  <div className="flex items-center space-x-4">
                    <h1 className="text-gray-700 text-sm font-medium">
                      Sort by:
                    </h1>
                    <Select>
                      <SelectTrigger className="rounded-3xl w-[7rem] border border-zinc-300 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-slate-950 focus-visible:ring-offset-0 text-sm">
                        <SelectValue placeholder="Weekly" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Day">Day</SelectItem>
                          <SelectItem value="Weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="Yearly">Yearly</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <BarCharts />
              </section>
              {/* end bar chart */}

              {/* start metric cards section */}
              <div className="grid grid-cols-2 gap-4 w-[40%] h-full">
                {metricCard.map((metric, index) => (
                  <div key={index}>
                    <MetricCard metric={metric} />
                  </div>
                ))}
              </div>

              {/* end metric cards section */}
            </section>
            {/* end chart and metric section */}

            {/* start table and top platform */}
            <section className="mt-9 flex space-x-4">
              {/* table */}
              <div className="flex-1 h-fit bg-white p-4  border border-slate-100 rounded-[14px]">
                <div className="flex items-center justify-between px-4 mb-6">
                  <h1 className="text-zinc-800 text-base font-semibold ">
                    Last Orders
                  </h1>
                  <h1 className="text-center text-emerald-400 text-sm font-medium">
                    See All
                  </h1>
                </div>

                <TableComp invoices={lastOrders} />
              </div>

              {/* top platform */}
              <div className="w-[40%] h-[81vh] 2xl:h-[47vh] scrollbar overflow-y-auto bg-white p-4 border border-slate-100 rounded-[14px]">
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-zinc-800 text-base  font-semibold ">
                    Top Platform
                  </h1>
                  <h1 className="text-center text-emerald-400 text-sm font-medium">
                    See All
                  </h1>
                </div>

                <div className="space-y-6">
                  {topPlatform.map((platform, index) => (
                    <div key={index}>
                      <TopPlatform platform={platform} />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="px-3 space-y-6 sm:hidden block">
          {/* trend card */}
          <div className="mt-6">
            <Carousel
              opts={{
                align: "start",
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="w-full max-w-sm"
            >
              <CarouselContent>
                {metricCard.map((metric, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-2/3 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <MetricCard metric={metric} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* chart */}
          <section className="flex-1 bg-white h-[70vh] p-4  border border-slate-100 rounded-[14px]">
            <div className="flex justify-between mb-10">
              <h1 className="text-zinc-800 text-lg font-semibold">
                Sales Trend
              </h1>
              <div className="flex items-center space-x-4">
                <h1 className="text-gray-700 text-sm font-medium">Sort by:</h1>
                <Select>
                  <SelectTrigger className="rounded-3xl w-[7rem] border border-zinc-300 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-slate-950 focus-visible:ring-offset-0 text-sm">
                    <SelectValue placeholder="Weekly" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Day">Day</SelectItem>
                      <SelectItem value="Weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="Yearly">Yearly</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <BarCharts />
          </section>

          {/* top platform */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-zinc-800 text-lg font-semibold ">
                Top Platform
              </h1>
              <h1 className="text-center text-emerald-400 text-base font-medium">
                See All
              </h1>
            </div>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-sm"
            >
              <CarouselContent className="-ml-[15rem] ">
                {topPlatform.map((platform, index) => (
                  <CarouselItem key={index} className="pl-[15rem] basis-1/2">
                    <div className="w-[18rem]">
                      <TopPlatform platform={platform} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* table */}
          <div className="space-y-6">
            {lastOrders.map((invoice, index) => (
              <div key={index}>
                <TableCard invoice={invoice} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
