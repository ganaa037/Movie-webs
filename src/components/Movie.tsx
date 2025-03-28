"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import { get } from "http";

export const Movie = () => {
  const [data1, setData1] = useState([]);

  const FunctionName = async () => {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
      );
      setData1(data.results);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    FunctionName();
  }, []);

  return (
    <Carousel>
      <CarouselContent className="relative">
        {data1?.map((movie: any, i: number) => {
          return (
            <CarouselItem key={i} className=" relative">
              <img
                className=" w-full h-[600px] object-cover"
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              ></img>
              <div className="absolute top-[178px] left-[140px] text-[#FAFAFA] flex gap-4 flex-col ">
                <div>
                  <p className="text-[16px] font-normal leading-6 text-[#FFF]">
                    Now Playing:
                  </p>
                  <p className="text-[#FFF] text-[36px] font-bold leading-10">
                    {movie.title}
                  </p>
                  <div className="flex">
                    <p className="flex">
                      <Star className="fill-yellow-300" />
                      {movie.vote_average}
                    </p>
                    <p>/10</p>
                  </div>
                </div>
                <p className="w-[302px] text-[12px] leading-4 font-normal text-[#FAFAFA]">
                  {movie.overview}
                </p>
                <Button className="bg-[#FFFFFF] text-[black] w-[145px] h-10">
                  <Play />
                  Watch Trailer
                </Button>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
};
