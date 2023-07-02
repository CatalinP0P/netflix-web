import React from "react";
import Containter from "./Containter";

export default function HorizontalShowcase({
  title,
  shows,
}: {
  title?: string;
  shows: any[];
}) {
  return (
    <div className="flex flex-col gap-1">
      <label>{title}</label>
      <div className="flex flex-row overflow-x-scroll gap-4">
        {shows.map((show: any) => {
          return (
            <img
              className="w-[250px] h-[135px] relative hover:scale-110 transition-all"
              src={show.imageURL}
            ></img>
          );
        })}
      </div>
    </div>
  );
}
