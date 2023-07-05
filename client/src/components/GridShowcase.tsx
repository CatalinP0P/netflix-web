import React from "react";
import Containter from "./Containter";
import { usePopup } from "../context/PopupContext";

export default function GridShowcase({ shows }: { shows: any }) {
  const popup = usePopup();

  const openShow = (show: any) => {
    popup.setShow(show);
    popup.setShowVisibility(true);
  };
  
  return (
    <Containter className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-12 mt-24">
      {shows.map((show: any) => {
        return (
          <img
            key={show._id}
            className="w-full h-[100%] hover:scale-110 transition-all"
            src={show.imageURL}
            onClick={() => openShow(show)}
          ></img>
        );
      })}
    </Containter>
  );
}
