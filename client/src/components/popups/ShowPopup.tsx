import React from "react";
import { usePopup } from "../../context/PopupContext";
import { ReactComponent as XMark } from "../../assets/x.svg";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import PlayButton from "../PlayButton";

export default function ShowPopup() {
  const { show, showVisibility, closeAll } = usePopup();
  return !show ? null : (
    <div
      className={
        "fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[2000] w-[95%] h-[95%] max-w-[700px] max-h-[600px] bg-[#171717] rounded-md " +
        (showVisibility ? " flex" : " hidden")
      }
    >
      <div className="w-full h-full relative">
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          title="EXTRACTION 2 | Official Trailer | Netflix"
          width="100%"
          height="62%"
          src={
            show.videoURL +
            "?autoplay=0&amp;mute=1&amp;controls=0&amp;origin=https%3A%2F%2Fnetflx-web.vercel.app&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1"
          }
          id="widget2"
        ></iframe>
        <div className="absolute left-0 top-0 w-full h-[62%] pointer-events-none gradient-transparent-to-blur flex flex-col justify-between">
          <div className="w-full z-[1000]">
            <XMark
              className="float-right bg-[#171717] rounded-full w-[32px] h-[30px] m-2 p-[.45rem] fill-white opacity-50 hover:opacity-90 cursor-pointer border-2 border-[#171717] after:border-white z-[1000]"
              onClick={() => closeAll()}
            />
          </div>
          <div className="flex flex-row justify-between px-8 py-2">
            <div className="flex flex-row gap-2 items-center">
              <PlayButton />
              <Plus className="w-[30px] h-[30px] p-1 fill-white border border-white rounded-full bg-[#171717] opacity-50 hover:opacity-90" />
            </div>
          </div>
        </div>

        <div className="text-white px-8 flex flex-col gap-2 pt-6 pb-8 text-sm">
          <label className="text-lg font-medium">{show.title}</label>
          <div className="flex flex-row items-baseline gap-2">
            <label className="text-green-600">89% Match</label>
            <label className="text-md font-light">{show.year}</label>
          </div>
          <p className="text-sm font-light">{show.description}</p>
          <label className="text-slate-400">
            Genres:{" "}
            <span className="text-white font-light ">
              {show.category.split(" ").map((cuv: any) => {
                return cuv + " " + " " + " ";
              })}
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
