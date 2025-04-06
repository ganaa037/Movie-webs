import React from "react";

import { Star } from "lucide-react";

type Props = {
  image: string;
  title: string;
  rate: string;
  jumpDetails : () => void;
};

export const Card = ({ image, rate, title, jumpDetails }: Props) => {
  return (
    <div
      onClick={jumpDetails}
      className="w-[230px] h-[439px] bg-[#F4F4F5] rounded-[8px]"
    >
      <img className="w-[229.73px] h-[340px] rounded-[8px]" src={image}></img>
      <div className="flex flex-col w-[214px] h-[79px] p-[8px]">
        <div className="flex">
          <p className="flex flex-row items-center">
            <Star className="fill-yellow-300 h-4" />
            {rate}
          </p>
          <p className="text-gray-400">/10</p>
        </div>
        <p className="text">{title}</p>
      </div>
    </div>
  );
};
