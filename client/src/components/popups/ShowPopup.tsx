import React, { useEffect, useState } from "react";
import { usePopup } from "../../context/PopupContext";
import { ReactComponent as XMark } from "../../assets/x.svg";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import PlayButton from "../PlayButton";
import { ReactComponent as Minus } from "../../assets/minus.svg";
import { useMyList } from "../../context/MyListContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ShowPopup() {
  const { show, showVisibility, closeAll } = usePopup();
  const [inMyList, setInMyList] = useState(false);
  const { MyList, toggle } = useMyList();
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!show) return;
    if (MyList.find((m: any) => m._id == show._id)) {
      setInMyList(true);
    } else setInMyList(false);
  }, [show]);

  return !show ? null : (
    <div
      className={
        "fixed left-[50%] z-[1000] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[95%] h-[95%] max-w-[700px] max-h-[600px] bg-[#171717] rounded-md " +
        (showVisibility ? " flex" : " hidden")
      }
    >
      <div className="w-full h-full relative">
        <iframe
          className="relative z-[998]"
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
          <div className="w-full z-[1005]">
            <XMark
              className="pointer-events-auto float-right bg-[#171717] rounded-full w-[32px] h-[30px] m-2 p-[.45rem] fill-white opacity-50 hover:opacity-90 cursor-pointer border-2 border-[#171717] after:border-white"
              onClick={() => closeAll()}
            />
          </div>
          <div className="flex flex-row justify-between px-8 py-2 z-[1005]">
            <div className="flex flex-row gap-2 items-center pointer-events-auto">
              <PlayButton />
              {inMyList ? (
                <Minus
                  className="w-[30px] h-[30px] p-1 fill-white border border-white rounded-full bg-[#171717] opacity-50 hover:opacity-90 cursor-pointer"
                  onClick={async () => {
                    if (!user) {
                      closeAll();
                      return navigate("/signin");
                    }
                    setInMyList(await toggle(show._id));
                  }}
                />
              ) : (
                <Plus
                  className="w-[30px] h-[30px] p-1 fill-white border border-white rounded-full bg-[#171717] opacity-50 hover:opacity-90 cursor-pointer"
                  onClick={async () => {
                    if (!user) {
                      closeAll();
                      return navigate("/signin");
                    }
                    setInMyList(await toggle(show._id));
                  }}
                />
              )}
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
