import React, { useRef } from "react";
import Containter from "./Containter";
import { ReactComponent as Arrow } from "../assets/angle-left.svg";
import { usePopup } from "../context/PopupContext";

export default function HorizontalShowcase({
  title,
  shows,
  className,
}: {
  title?: string;
  shows: any[];
  className?: string;
}) {
  const popup = usePopup();
  const divRef = useRef(null);

  const handleScrollRight = (e: any) => {
    const div: any = divRef.current;
    div.scrollLeft += window.innerWidth / 2;
  };

  const handleScrollLeft = (e: any) => {
    const div: any = divRef.current;
    div.scrollLeft -= window.innerWidth / 2;
  };

  const openShow = (show: any) => {
    popup.setShow(show);
    popup.setShowVisibility(true);
  };

  return (
    <div className={"flex flex-col gap-1 z-[100] relative " + className}>
      <label className="z-[100] ms-2 font-medium text-xl">{title}</label>
      <div
        ref={divRef}
        className="group flex flex-row overflow-x-scroll scroll-smooth justify-between overflow-y-hidden gap-1 z-[100] scroll-hide"
      >
        <div
          className={
            "hidden hover:border border-white group-hover:flex absolute z-[101] h-[81%] w-[50px] left-0 top-8 bg-[rgba(0,0,0,.75)] flex-row justify-center items-center cursor-pointer "
          }
          onClick={handleScrollLeft}
        >
          <Arrow className="fill-white h-[32px]" />
        </div>

        <div
          className="hidden hover:border border-white group-hover:flex absolute z-[101] h-[81%] w-[50px] right-0 top-8 bg-[rgba(0,0,0,.75)] flex-row justify-center items-center cursor-pointer"
          onClick={handleScrollRight}
        >
          <Arrow className="fill-white h-[32px] rotate-180" />
        </div>
        {shows.map((show: any) => {
          return (
            <img
              onClick={() => openShow(show)}
              key={show._id}
              className="w-[250px] h-[135px] hover:scale-105 transition-all z-[100]"
              src={show.imageURL}
            ></img>
          );
        })}
      </div>
    </div>
  );
}
