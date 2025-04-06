"use client";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { Card } from "./Card";
import { useRouter } from "next/navigation";
import { axiosInstance } from "@/lib/utils";
export const PopularMovie = () => {
  const [popular, setPopular] = useState([]);
  const FunctionName = async () => {
    try {
      const { data } = await axiosInstance.get(
        "movie/popular?language=en-US&page=1"
      );

      setPopular(data.results);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    FunctionName();
  }, []);
  const router = useRouter();
  const handleOnClick = (id: number) => {
    router.push(`/detail/${id}`);
  };
  return (
    <div className="flex flex-col gap-[32px] px-[80px]">
      <div className="flex items-center justify-between ">
        <p className="text-[24px] leading-8 font-semibold">Popular</p>
        <Button className="bg-[#FFFFFF] text-[black] w-[120px] px-4 py-2 h-9">
          See more
          <MoveRight />
        </Button>
      </div>
      <div className="grid grid-cols-5 gap-[32px] w-full">
        {popular?.slice(0, 10).map((value: any, index: number) => {
          return (
            <Card
              jumpDetails={() => 
                handleOnClick(value.id)}
              key={index}
              image={`https://image.tmdb.org/t/p/w300/${value.poster_path}`}
              rate={value.vote_average}
              title={value.title}
            />
          );
        })}
      </div>
    </div>
  );
};
