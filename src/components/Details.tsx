"use client";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

import {
  axiosInstance,
  CastDataType,
  CreditDataType,
  CrewDataType,
  imageUrl,
} from "@/lib/utils";
import { useParams } from "next/navigation";

type specificProp = {
  adult: boolean;
  title: string;
  release_date: string;
  runtime: number;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
  overview: string;
};

export const Details = () => {
  const { id } = useParams();
  const [specific, setSpecific] = useState<specificProp>();
  const [genre, setGenre] = useState([]);
  const [castData, setCastData] = useState<CreditDataType>({
    id: 1,
    crew: [],
    cast: [],
  });

  const getSpecific = async () => {
    try {
      const { data } = await axiosInstance.get(`movie/${id}?language=en-US`);
      console.log(data);

      setSpecific(data);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  const getGenre = async () => {
    try {
      const { data } = await axiosInstance.get(`movie/${id}?language=en-US`);
      console.log(data);

      setGenre(data.genres);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  const getCastData = async () => {
    try {
      const { data } = await axiosInstance.get(
        `movie/${id}/credits?language=en-US`
      );
      setCastData(data);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getSpecific();
    getGenre();
    getCastData();
  }, []);
  console.log(castData.crew);
  const Director = castData.crew.filter((el) => el.job === "Director");
  const Writers = castData.crew.filter((el) => el.department === "Writing");
  const Stars = castData.crew.filter(
    (el) => el.known_for_department === "Acting"
  );

  return (
    <div className="w-[1080px] ml-[180px] mr-[180px] flex flex-col gap-6 relative">
      <div className="flex justify-between">
        <div>
          <p>{specific?.title}</p>
          <p>{specific?.release_date + " " + specific?.runtime}</p>
        </div>
        <div className="">
          <p>rating</p>
          <div className="flex items-center">
            <Star className="fill-yellow-300 h-4" />

            <div className="">
              <div className="flex">
                <p className="flex flex-row items-center">
                  {specific?.vote_average}
                </p>
                <p className="text-gray-400">/10</p>
              </div>
              <div>
                <p>37k</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex gap-8">
          <img
            className="w-[290px] h-[428px] rounded-[4px]"
            src={imageUrl(specific?.poster_path)}
            alt=""
          />
          <div className="flex relative">
            <img
              className="w-[760px] h-[428px] rounded-[4px]"
              src={`https://image.tmdb.org/t/p/w300${specific?.backdrop_path}`}
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
          {genre.map((value: any, index: number) => {
            return (
              <Badge
                key={index}
                className="bg-[#FFFFFF] text-[black] w-[77px] h-5 text-[12px] px-[10px] py-[2px] border"
                variant="outline"
              >
                {value.name}
              </Badge>
            );
          })}
        </div>
      </div>
      <p>{specific?.overview}</p>

      <div className="flex gap-[53px]">
        <p className="text-[#09090B] text-4 leading-7 font-bold w-[64px]">
          Director
        </p>
        {Director.map((value: any, index: number) => {
          return <p key={index}>{value.name}</p>;
        })}
      </div>

      <p className="w-full border border-gray-400"></p>

      <div className="flex gap-[53px]">
        <p className="text-[#09090B] text-4 leading-7 font-bold w-[64px]">
          Writers
        </p>
        {Writers.map((value: any, index: number) => {
          return <p key={index}>{value.name}</p>;
        })}
      </div>

      <p className="w-full border border-gray-400"></p>

      <div className="flex gap-[53px]">
        <p className="text-[#09090B] text-4 leading-7 font-bold w-[64px]">
          Stars
        </p>
        {Stars.map((value: any, index: number) => {
          return <p key={index}>{value.name}</p>;
        })}
      </div>

      <p className="w-full border border-gray-400 "></p>
    </div>
  );
};
