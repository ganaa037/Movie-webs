"use client";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";

export const Details = () => {
  const [genreList, setGenreList] = useState([]);
  const getGenrelist = async () => {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/278?language=en-US&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
      );
      console.log(data, "data");
      setGenreList(data.genres);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getGenrelist();
  }, []);

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
            <Star className="fill-yellow-300 h-4" />

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
      {genreList.slice().map((value: any, index: number) => {
        return (
          <div key={index}>
            <div className="flex gap-8">
              <img
                className="w-[290px] h-[428px] rounded-[4px]"
                src={`https://image.tmdb.org/t/p/w300/${value.poster_path}`}
                alt=""
              />
              <div className="flex relative">
                <img
                  className="w-[760px] h-[428px] rounded-[4px] "
                  src={`https://image.tmdb.org/t/p/w300/${value.backdrop_path}`}
                  alt=""
                />
                <div className=" flex absolute  items-center bottom-[28px] left-[28px] gap-3">
                  <Button className="bg-white rounded-[9999px] w-10 h-10 text-black">
                    <Play />
                  </Button>
                  <p> Watch Trailer</p>
                  <span className="">2:35</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3  ">
              <Badge
                className="bg-[#FFFFFF] text-[black] w-[77px] h-5 text-[12px] px-[10px] py-[2px] border"
                variant="outline"
              >
                {value.name}
              </Badge>
            </div>
          </div>
        );
      })}

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
      <p className="w-full border border-gray-400 "></p>
      <div className="flex gap-[53px]">
        <p className="text-[#09090B] text-4 leading-7 font-bold w-[64px]">
          Writers
        </p>
        <p>Winnie Holzman · Dana Fox · Gregory Maguire</p>
      </div>
      <p className="w-full border border-gray-400 "></p>
      <div className="flex gap-[53px]">
        <p className="text-[#09090B] text-4 leading-7 font-bold w-[64px]">
          Stars
        </p>
        <p>Cynthia Erivo · Ariana Grande · Jeff Goldblum</p>
      </div>
      <p className="w-full border border-gray-400 "></p>
    </div>
  );
};
