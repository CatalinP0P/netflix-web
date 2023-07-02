import React, { MouseEventHandler, RefObject, useRef } from "react";
import { ReactComponent as PlaySvg } from "../assets/play.svg";

export default function PlayButton({
  onClick,
  ref,
}: {
  onClick?: any;
  ref?: React.MutableRefObject<any>;
}) {
  const buttyonRef = useRef();

  return (
    <button
      ref={ref ? ref : null}
      onClick={onClick ? onClick : null}
      className="text-secondary group hover:text-white transition-all bg-white hover:bg-secondary flex flex-row items-center gap-1 py-[.125rem] px-2 rounded-[5px] justify-center text-sm"
    >
      <PlaySvg className="w-[30px] h-[30px] fill-secondary transition-all group-hover:fill-white"></PlaySvg>
      <label>Play</label>
      <div />
    </button>
  );
}
