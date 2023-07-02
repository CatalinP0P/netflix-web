import React, { useEffect, useState } from "react";
import Containter from "../Containter";

import bellSvg from "../../assets/bell.svg";
import netflixLogo from "../../assets/netflix-logo.svg";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [top, setTop] = useState(true);
  const navigate = useNavigate();

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
          <img
            className="h-[28px] cursor-pointer"
            src={netflixLogo}
            onClick={() => navigate("/")}
          />
          <div className="flex flex-row gap-6 text-sm font-light items-center text-muted">
            <a className="font-semibold text-white">Home</a>
            <a>TV Shows</a>
            <a>Movies</a>
            <a>New & Popular</a>
            <a>My List</a>
          </div>
        </div>
        <div className="flex flex-row items-center gap-6">
          <SearchBar />
          <img src={bellSvg} className="h-[20px]" />
          <button className="bg-customred text-white hover:bg-customredhover rounded-sm py-2 text-sm px-4">
            Sign in
          </button>
        </div>
      </Containter>
    </div>
  );
}
