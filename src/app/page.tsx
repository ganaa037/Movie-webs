import {
  Movie,
  PopularMovie,
  TopRatedMovie,
  UpcomingMovie,
} from "@/components";

export default function Home() {
  return (
    <div className="w-[1440px]">
      <Movie></Movie>
      <div className="flex flex-col gap-[52px]">
        <UpcomingMovie />
        <PopularMovie />
        <TopRatedMovie />
      </div>
    </div>
  );
}
