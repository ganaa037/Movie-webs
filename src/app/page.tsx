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
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/user`
    );
    console.log(response);
    setUsers(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(process.env.NEXT_PUBLIC_BACKEND_ENDPOINT);
  const [inputValue, setInputValue] = useState([]);
  const handleOnChange = (event: any) => {
    setInputValue(event.target.value);
  };

  return (
    // <div className="w-full">
    //   <Movie></Movie>
    //   <div className="flex flex-col gap-[52px]">
    //     <UpcomingMovie />
    //     <PopularMovie />
    //     <TopRatedMovie />
    //   </div>
    // </div>

    <div>
      <input
        onChange={handleOnChange}
        type="email"
        className="border border-gray"
      ></input>
      <button className="w-4,h-4">add</button>
      {users?.map((value: any, index: number) => {
        return (
          <div key={index}>
            <p>{value.username}</p>
            <p>{value.gender}</p>
            <p>{value.age}</p>
            <p>{value.email}</p>
            <p>{inputValue}</p>
          </div>
        );
      })}
    </div>
  );
}
