"use client"
import React, { useState } from "react";
import { Link, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function page() {
  const[trailer,setTrailer]=useState([])
  const onClickTrailer =()=>{
    setTrailer(trailer)
  }
  return (
    <div className="w-[1080px] ml-[180px] mr-[180px] flex flex-col gap-6 relative">
      <div className="flex justify-between">
        <div>
          <p>Wicked</p>
          <p>2024.11.26 · PG · 2h 40m</p>
        </div>
        <div className="">
          <p>rating</p>
          <div className="flex items-center">
            
            <Star href="" className="fill-yellow-300 h-4" />
            
            <div className="">
              <div className="flex">
                <p className="flex flex-row items-center">6.9</p>
                <p className="text-gray-400">/10</p>
              </div>
              <div>
                <p>37k</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-8">
        <img
          className="w-[290px] h-[428px] rounded-[4px]"
          src="https://s3-alpha-sig.figma.com/img/f5e4/c1eb/84f6a4e2c66a0969068dc7b7d6463302?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Y2gNyHTGU~LRdRWRjIk8EvsnchUTQiJCDsGyRKrK4LEqGyeZ~SoaWRWKL~Ufcj5pZz7j7lPMhAoZ2n0uts13lHTRmQGs-RTOZbZel8n3B~7Mfq9Q4ylCnVRdvVBt67U~xCgvwFthmCR-g~ZSS2TyckmK0HvThX~YVPqR9HcGXqbBi3qnY3wwi4lk~oVNrPtmZVB3gQOrdhPyr1aAknRb~-5Ox~Yfn0uv4dm2TXx2HRdFQM4XiNSwlYAvMrLTF5BKqf9BV1ZCW2K79KZWUF-13y88Mn9~82vVBeOATIM1pcOmlMTN-WN2RcKDAvFYnhDDm9KLJoqV~T54WbL65ZGdqA__"
          alt=""
        />
        <div className="flex relative">
          <img
            className="w-[760px] h-[428px] rounded-[4px] "
            src="https://s3-alpha-sig.figma.com/img/4160/aecb/034291669d5251d1faae7fc5d45790ba?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KWtmLO-Az9JeYU6RlX8IP2O4OD~eml4jdTPu5tSgJHsV58BGh3D-mDBDrvBaOLCDiQpbg8c4u0lcOGxtSDMPE4tRju9Nuo9HIQreSiAo4I5K3aWe5P0ohGoSknXXaVwhp5-oMgECk3i4ZktXYMzNAyXkqQzavQOEOgcEkAj1u3qw26ouLB1I7hF7umY1ysVmZV7SO-1qPsrIPdbTEbQLKvKiWfbOvC6f9SSnuwz-uI3jWCBwVHawV6V~RKQDukmcxmHah-jj7j4gKyEiIVKXRrAs3c9rEd~uMBrqq9kTqfH5HHYv-h-iM2agtfh-LfeJhr3obiE63iSmAbe4NmtvJA__"
            alt=""
          />
          <div className=" flex absolute  items-center bottom-[28px] left-[28px] gap-3">
         
            <Button onClick={onClickTrailer} className="bg-white rounded-[9999px] w-10 h-10 text-black">
            <Link href="https://www.youtube.com/"></Link>
              <Play />
            </Button>
            <p> Watch Trailer</p>
            <span className="">2:35</span>
          </div>
        </div>
      </div>
      <div className="flex gap-3 ">
        <Badge
          className="bg-[#FFFFFF] text-[black] w-[77px] h-5 text-[12px] px-[10px] py-[2px] border"
          variant="outline"
        >
          Fairy Tale
        </Badge>
        <Badge
          className="bg-[#FFFFFF] text-[black] w-[77px] h-5 text-[12px] px-[10px] py-[2px] border"
          variant="outline"
        >
          Pop Musical
        </Badge>
        <Badge
          className="bg-[#FFFFFF] text-[black] w-[77px] h-5 text-[12px] px-[10px] py-[2px] border"
          variant="outline"
        >
          Fantasy
        </Badge>
        <Badge
          className="bg-[#FFFFFF] text-[black] w-[77px] h-5 text-[12px] px-[10px] py-[2px] border"
          variant="outline"
        >
          Musical
        </Badge>
        <Badge
          className="bg-[#FFFFFF] text-[black] w-[77px] h-5 text-[12px] px-[10px] py-[2px] border"
          variant="outline"
        >
          Romance
        </Badge>
      </div>
      <p>
        Elphaba, a misunderstood young woman because of her green skin, and
        Glinda, a popular girl, become friends at Shiz University in the Land of
        Oz. After an encounter with the Wonderful Wizard of Oz, their friendship
        reaches a crossroads.
      </p>

      <div className="flex gap-[53px]">
        <p className="text-[#09090B] text-4 leading-7 font-bold w-[64px]">
          Director
        </p>
        <p>Jon M. Chu</p>
      </div>
      <div className="flex gap-[53px]">
        <p className="text-[#09090B] text-4 leading-7 font-bold w-[64px]">
          Writers
        </p>
        <p>Winnie Holzman · Dana Fox · Gregory Maguire</p>
      </div>
      <div className="flex gap-[53px]">
        <p className="text-[#09090B] text-4 leading-7 font-bold w-[64px]">
          Stars
        </p>
        <p>Cynthia Erivo · Ariana Grande · Jeff Goldblum</p>
      </div>
    </div>
  );
}
console.log("working");
