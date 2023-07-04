import React from "react";
import { ReactComponent as InfoSVG } from "../assets/info.svg";

export default function InfoButton({ onClick }: { onClick?: any }) {
  return (
    <button
      onClick={onClick}
      className="text-white transition-all bg-transparent hover:bg-secondary flex flex-row items-center gap-1 py-[.125rem] px-2 rounded-[5px] justify-center text-sm border border-secondary"
    >
      <InfoSVG className="w-[30px] h-[30px] fill-white transition-all p-1" />
      <label>More Info</label>
      <div />
    </button>
  );
}
