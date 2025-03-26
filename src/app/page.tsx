import { Movie, Navbar, UpcomingMovie } from "@/components";
import { Footer } from "@/components/Footer";
import { PopularMovie } from "@/components/PopularMovie";
import { TopRatedMovie } from "@/components/TopRatedMovie";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[1440px]">
      <Navbar />
      <Movie></Movie>
      <div className="flex flex-col gap-[52px]">
        <UpcomingMovie />
        <PopularMovie />
        <TopRatedMovie />
      </div>
      <Footer />
    </div>
  );
}
