import { Moon } from "lucide-react";
import { ChevronRight } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Badge } from "@/components/ui/badge";
import React from "react";
// import { TbMovie } from "react-icons/tb";
import { Search } from "lucide-react";

import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Navbar = () => {
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
          <PopoverContent className="w-[577px] h-[333px] flex flex-wrap">
            Place content for the popover here.
            <ChevronRight />
            <p>Action</p>
            <p>Action</p>
            <p>Action</p>
            <p>Action</p>
            <p>Action</p>
            <p>Action</p>
            <p>Action</p>
            <p>Action</p>
            <p>Action</p>
            <p>Action</p>
            <p>Action</p>
            <p>Action</p>
            <p>Action</p>
            <p>Action</p>
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
