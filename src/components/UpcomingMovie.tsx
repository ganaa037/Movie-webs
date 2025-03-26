import React from "react";

import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { Card } from "./Card";
export const UpcomingMovie = () => {
  const MovieData = [
    {
      title: "Dear Santa",
      image:
        "https://upload.wikimedia.org/wikipedia/en/b/bb/Dear_Santa_%282024_film%29_poster.jpg",
      rate: "6.9",
    },
    {
      title: "How To Train Your Dragon Live Action",
      image:
        "data:image/jpeg;base64,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",
      rate: "6.9",
    },
    {
      title: "Alien Romulus",
      image:
        "https://upload.wikimedia.org/wikipedia/en/b/bb/Dear_Santa_%282024_film%29_poster.jpg",
      rate: "6.9",
    },
    {
      title: "From the Ashes",
      image:
        "https://upload.wikimedia.org/wikipedia/en/b/bb/Dear_Santa_%282024_film%29_poster.jpg",
      rate: "6.9",
    },
    {
      title: "Space Dogg",
      image:
        "https://upload.wikimedia.org/wikipedia/en/b/bb/Dear_Santa_%282024_film%29_poster.jpg",
      rate: "6.9",
    },
    {
      title: "The Order",
      image:
        "https://upload.wikimedia.org/wikipedia/en/b/bb/Dear_Santa_%282024_film%29_poster.jpg",
      rate: "6.9",
    },
    {
      title: "Y2K",
      image:
        "https://upload.wikimedia.org/wikipedia/en/b/bb/Dear_Santa_%282024_film%29_poster.jpg",
      rate: "6.9",
    },
    {
      title: "Solo Leveling: ReAwakening",
      image:
        "https://upload.wikimedia.org/wikipedia/en/b/bb/Dear_Santa_%282024_film%29_poster.jpg",
      rate: "6.9",
    },
    {
      title: "Get Away",
      image:
        "https://upload.wikimedia.org/wikipedia/en/b/bb/Dear_Santa_%282024_film%29_poster.jpg",
      rate: "6.9",
    },
    {
      title: "Sonic the Hedgehog 3",
      image:
        "https://upload.wikimedia.org/wikipedia/en/b/bb/Dear_Santa_%282024_film%29_poster.jpg",
      rate: "6.9",
    },
  ];
  return (
    <div className="flex flex-col gap-[32px] px-[80px]">
      <div className="flex items-center justify-between ">
        <p className="text-[24px] leading-8 font-semibold">Upcoming</p>
        <Button className="bg-[#FFFFFF] text-[black] w-[120px] px-4 py-2 h-9">
          See more
          <MoveRight />
        </Button>
      </div>
      <div className="grid grid-cols-5 gap-[32px] w-full">
        {MovieData.map((value, index) => {
          return (
            <Card
              key={index}
              image={value.image}
              rate={value.rate}
              title={value.title}
            />
          );
        })}
      </div>
    </div>
  );
};
