import {
  Movie,
  PopularMovie,
  TopRatedMovie,
  UpcomingMovie,
} from "@/components";

export default function Home() {
  return (
    <div className="w-full">
      <Movie></Movie>
      <div className="flex flex-col gap-[52px]">
        <UpcomingMovie />
        <PopularMovie />
        <TopRatedMovie />
      </div>
    </div>
  );
}
