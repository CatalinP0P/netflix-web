import React, { useEffect, useState } from "react";
import Containter from "../Containter";

import bellSvg from "../../assets/bell.svg";
import { ReactComponent as NetflixLogo } from "../../assets/netflix-logo.svg";
import SearchBar from "./SearchBar";
import SmallLogo from "../../assets/smallLogo.png";
import profileImage from "../../assets/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";
import { ReactComponent as ArrowUP } from "../../assets/arrow-trend-up.svg";
import { ReactComponent as Bell } from "../../assets/bell.svg";
import { ReactComponent as MovieClapper } from "../../assets/movie-clapper-solid-svgrepo-com.svg";
import { ReactComponent as House } from "../../assets/house-chimney.svg";
import { ReactComponent as Movie } from "../../assets/movie-svgrepo-com.svg";
import { ReactComponent as List } from "../../assets/list.svg";

import { useNavigate } from "react-router-dom";
import { usePopup } from "../../context/PopupContext";
import { useAuth } from "../../context/AuthContext";

export default function Header() {
  const [top, setTop] = useState(true);
  const { mobileMenuVisibility, setMobileMenuVisibility } = usePopup();

  const navigate = useNavigate();
  const auth = useAuth();

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
        "fixed top-0 left-0 right-0 flex flex-row w-full transition-all justify-center py-3 z-[1000] " +
        (top ? " bg-transparent" : " bg-[#171717] shadow-md")
      }
    >
      <Containter className="flex flex-row justify-between gap-4 items-center">
        <div className="flex flex-row gap-8 items-center">
          <NetflixLogo
            className="h-[28] w-[100px] cursor-pointer hidden lg:flex"
            onClick={() => navigate("/")}
          ></NetflixLogo>

          <div className="lg:hidden relative group text-white">
            <button
              className="flex flex-row items-center justify-between gap-2 px-2 py-1 hover:bg-[#262626] rounded-md"
              onClick={() => setMobileMenuVisibility(!mobileMenuVisibility)}
            >
              <img src={SmallLogo} className=" h-[16px]" />
              <label>Menu</label>
            </button>
            <div
              className={
                (mobileMenuVisibility
                  ? " flex"
                  : " opacity-0 pointer-events-none translate-y-[-25%]") +
                " flex-col absolute gap-[.125rem] rounded-sm text-xs left-0 top-14 transition-all bg-[#262626] min-w-[200px] w-fit h-fit"
              }
            >
              <div className="flex flex-row items-center gap-2 text-white p-3">
                <img src={SmallLogo} className=" h-[16px]" />
                <label>Netflix Web</label>
              </div>
              <div className="bg-[#344454] w-full h-[1px]" />

              <div className="p-2 mx-1 flex flex-row items-center gap-2 hover:bg-[#484444] rounded-sm mt-1">
                <House className="w-[16px] h-[16px]" />
                <label>Home</label>
              </div>

              <div className="p-2 mx-1 flex flex-row items-center gap-2 hover:bg-[#484444] rounded-sm">
                <MovieClapper className="w-[16px] h-[16px]" />
                <label>TV Shows</label>
              </div>

              <div className="p-2 mx-1 flex flex-row items-center gap-2 hover:bg-[#484444] rounded-sm">
                <Movie className="w-[16px] h-[16px]" />
                <label>Movies</label>
              </div>

              <div className="p-2 mx-1 flex flex-row items-center gap-2 hover:bg-[#484444] rounded-sm">
                <ArrowUP className="w-[16px] h-[16px] fill-white" />
                <label>New & Popular</label>
              </div>

              <div className="p-2 mx-1 flex flex-row items-center gap-2 hover:bg-[#484444] rounded-sm">
                <List className="w-[16px] h-[16px] fill-white" />
                <label>My List</label>
              </div>

              <div className="p-2 mx-1 flex flex-row items-center gap-2 hover:bg-[#484444] rounded-sm mb-1">
                <Bell className="w-[16px] h-[16px] fill-white" />
                <label>Notifications</label>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-row gap-6 text-sm font-light items-center text-muted">
            <a className="font-semibold text-white">Home</a>
            <a>TV Shows</a>
            <a>Movies</a>
            <a>New & Popular</a>
            <a>My List</a>
          </div>
        </div>
        <div className="flex flex-row items-center gap-6">
          <SearchBar />
          <img src={bellSvg} className="hidden lg:flex h-[20px]" />
          {auth.user ? (
            <img src={profileImage} className="w-[24px] h-[24px]" onClick={async () => await auth.signOut()} />
          ) : (
            <button className="bg-customred text-white hover:bg-customredhover rounded-[5px] py-[.4rem] text-sm px-4">
              Sign in
            </button>
          )}
        </div>
      </Containter>
    </div>
  );
}
