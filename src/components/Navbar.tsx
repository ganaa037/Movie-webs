"use client";
import { Moon } from "lucide-react";
import { ChevronRight } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Badge } from "@/components/ui/badge";
import React, { useEffect, useState } from "react";
// import { TbMovie } from "react-icons/tb";
import { Search } from "lucide-react";

import { ChevronDown } from "lucide-react";

import { axiosInstance } from "@/lib/utils";

export const Navbar = () => {
  const [genreList, setGenreList] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("genre/movie/list?language=en")
      .then((res) => setGenreList(res.data.genres));
  }, []);
  console.log(setGenreList, "kk");

  return (
    <div className="flex justify-around">
      <div className="flex items-center gap-2 text-blue-900">
        <Search className="text-[#4338CA] size-5" />
        <p className="text-[#4338CA] text-4 font-bold leading-5">Movie Z</p>
      </div>
      <div className="flex gap-3 items-center ">
        <Popover>
          <PopoverTrigger>
            <ChevronDown />
            Genre
          </PopoverTrigger>
          <PopoverContent className="w-[577px] h-[333px] flex gap-4  flex-col">
            <p>Place content for the popover here.</p>
            <p className="w-full border border-gray-400"></p>
            <div className="flex flex-wrap gap-4">
              {genreList.map((genre, index) => {
                return (
                  <Badge
                    key={index}
                    className="bg-[#FFFFFF] text-[black] w-[77px] h-5 text-[12px] px-[10px] py-[2px] border"
                    variant="outline"
                  >
                    {genre?.name}
                    <ChevronRight />
                  </Badge>
                );
              })}
            </div>
          </PopoverContent>
        </Popover>

        <div className="flex w-[379px] h-[36px] border rounded-[10px] items-center gap-[10px] px-3">
          <Search className="size-5" />
          <input placeholder="Search.." className="w-full border-none"></input>
        </div>
      </div>
      <button className="w-[36px] h-[36px] border rounded-[10px] flex justify-center items-center">
        <Moon />
      </button>
    </div>
  );
};
