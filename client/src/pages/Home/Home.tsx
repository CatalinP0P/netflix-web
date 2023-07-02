import React from "react";
import heroImage from "../../assets/johnwick4.jpeg";
import Containter from "../../components/Containter";
import PlayButton from "../../components/PlayButton";
import InfoButton from "../../components/InfoButton";

export default function Home() {
  return (
    <>
      <img
        className="absolute top-0 left-0 w-full h-screen object-cover z-[1]"
        src={heroImage}
      />
      <div className="absolute top-0 left-0 w-full min-h-screen bg-[rgba(0,0,0,.5)] z-[2]" />

      <Containter className="text-white z-[100] pt-48">
        <div className="w-[45%] flex flex-col gap-3">
          <label className="text-4xl font-bold z-[100]">
            John Wick: Chapter 4
          </label>
          <div className="flex flex-row gap-2 z-[100] items-baseline">
            <label className="text-green-600 font-semibold text-sm">
              79% Match
            </label>
            <label className="text-muted">2023</label>
          </div>

          <p className="text-white text-sm font-thin z-[100]">
            With the price on his head ever increasing, John Wick uncovers a
            path to defeating The High Table. But before he can earn his
            freedom, Wick must face off against a new enemy with powerful
            alliances across the globe and forces that turn old friends into
            foes.
          </p>
          <div className="flex flex-row gap-2 z-[100]">
            <PlayButton />
            <InfoButton />
          </div>
        </div>


        
      </Containter>
    </>
  );
}
