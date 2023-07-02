import React, { useEffect, useState } from "react";
import Containter from "../Containter";

import bellSvg from "../../assets/bell.svg";
import searchSvg from "../../assets/search.svg";
import netflixLogo from "../../assets/netflix-logo.svg";
import { getByPlaceholderText } from "@testing-library/react";

export default function Header() {
  const [top, setTop] = useState(true);
  const [searchVisiblity, setSearch] = useState(false);

  const toggleSearch = () => {
    setSearch(!searchVisiblity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e: any) => {
    console.log(window.scrollY);
    if (window.scrollY <= 5) setTop(true);
    else setTop(false);
  };

  return (
    <div
      className={
        "fixed top-0 left-0 right-0 flex flex-row w-full transition-all justify-center py-3 " +
        (top ? " bg-transparent" : " bg-[#171717] shadow-md")
      }
    >
      <Containter className="flex flex-row justify-between w-full gap-4 items-center">
        <div className="flex flex-row gap-8 items-center">
          <img className="h-[28px]" src={netflixLogo} />
          <div className="flex flex-row gap-6 text-sm font-light items-center text-muted">
            <a className="font-semibold text-white">Home</a>
            <a>TV Shows</a>
            <a>Movies</a>
            <a>New & Popular</a>
            <a>My List</a>
          </div>
        </div>
        <div className="flex flex-row items-center gap-6">
          <div
            className={
              "flex flex-row items-center overflow-hidden gap-2 p-1 transition-all " +
              (searchVisiblity
                ? " max-w-[150px] px-2 border border-white rounded-sm"
                : " max-w-[30px]")
            }
          >
            <img src={searchSvg} className="h-[18x]" onClick={toggleSearch} />
            <input
              placeholder="Search..."
              className={
                "outline-none bg-transparent text-white px-2 w-full " +
                (searchVisiblity ? " " : " hidden")
              }
            />
          </div>
          <img src={bellSvg} className="h-[20px]" />
          <button className="bg-customred text-white hover:bg-customredhover rounded-sm py-2 text-sm px-4">
            Sign in
          </button>
        </div>
      </Containter>
    </div>
  );
}
