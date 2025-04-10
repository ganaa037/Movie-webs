"use client";
import {
  Movie,
  PopularMovie,
  TopRatedMovie,
  UpcomingMovie,
} from "@/components";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState();
  const fetchUsers = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/user`
    );
    console.log(response);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(process.env.NEXT_PUBLIC_BACKEND_ENDPOINT);

  return (
    // <div className="w-full">
    //   <Movie></Movie>
    //   <div className="flex flex-col gap-[52px]">
    //     <UpcomingMovie />
    //     <PopularMovie />
    //     <TopRatedMovie />
    //   </div>
    // </div>
    <div>hello</div>
  );
}
