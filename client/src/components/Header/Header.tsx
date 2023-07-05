import React, { useEffect, useState } from "react";
import Containter from "../Containter";

import bellSvg from "../../assets/bell.svg";
import { ReactComponent as NetflixLogo } from "../../assets/netflix-logo.svg";
import SearchBar from "./SearchBar";
import SmallLogo from "../../assets/smallLogo.png";
import profileImage from "../../assets/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";
import { ReactComponent as ArrowUP } from "../../assets/arrow-trend-up.svg";
import { ReactComponent as AngleUP } from "../../assets/angle-up.svg";
import { ReactComponent as Question } from "../../assets/question-circle.svg";
import { ReactComponent as Bell } from "../../assets/bell.svg";
import { ReactComponent as MovieClapper } from "../../assets/movie-clapper-solid-svgrepo-com.svg";
import { ReactComponent as House } from "../../assets/house-chimney.svg";
import { ReactComponent as Person } from "../../assets/person.svg";
import { ReactComponent as Pencil } from "../../assets/pencil.svg";
import { ReactComponent as Exit } from "../../assets/arrow-up-right-from-square.svg";
import { ReactComponent as Movie } from "../../assets/movie-svgrepo-com.svg";
import { ReactComponent as List } from "../../assets/list.svg";

import { useLoaderData, useNavigate } from "react-router-dom";
import { usePopup } from "../../context/PopupContext";
import { useAuth } from "../../context/AuthContext";
import { useLocation } from "react-router-dom";
import { useDB } from "../../context/DatabaseContext";

export default function Header() {
  const [top, setTop] = useState(true);

  const {
    mobileMenuVisibility,
    setMobileMenuVisibility,
    accountVisibility,
    setAccountVisibility,
    closeAll,
  } = usePopup();

  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e: any) => {
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
                " flex-col absolute gap-[.125rem] z-[10001] rounded-sm text-xs left-0 top-14 transition-all bg-[#262626] min-w-[200px] w-fit h-fit"
              }
            >
              <div
                className="flex flex-row items-center gap-2 text-white p-3 cursor-pointer"
                onClick={() => {
                  navigate("/");
                  closeAll();
                }}
              >
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

              <div
                className="p-2 mx-1 flex flex-row items-center gap-2 hover:bg-[#484444] rounded-sm cursor-pointer"
                onClick={() => {
                  navigate("/my-list");
                  closeAll();
                }}
              >
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
            <a
              href="/"
              className={
                location.pathname == "/" ? "font-semibold text-white" : ""
              }
            >
              Home
            </a>
            <a
              href="/tv-shows"
              className={
                location.pathname == "/tv-shows"
                  ? "font-semibold text-white"
                  : ""
              }
            >
              TV Shows
            </a>
            <a
              href="/movies"
              className={
                location.pathname == "/movies" ? "font-semibold text-white" : ""
              }
            >
              Movies
            </a>
            <a
              href="/new-and-popular"
              className={
                location.pathname == "/new-and-popular"
                  ? "font-semibold text-white"
                  : ""
              }
            >
              New & Popular
            </a>
            <a
              href="/my-list"
              className={
                location.pathname == "/my-list"
                  ? "font-semibold text-white"
                  : ""
              }
            >
              My List
            </a>
          </div>
        </div>
        <div className="flex flex-row items-center gap-6">
          <SearchBar />
          <img src={bellSvg} className="hidden lg:flex h-[20px]" />
          {auth.user ? (
            <div className="relative">
              <div
                className="hover:bg-[#262626] rounded-[5px] py-2 px-3 flex flex-row items-center gap-4 group border border-transparent cursor-pointer"
                onClick={() => setAccountVisibility(!accountVisibility)}
              >
                <img src={profileImage} className="w-[24px] h-[24px]" />
                <AngleUP
                  className={
                    "w-[14px] h-[14px] fill-white transition-all " +
                    (accountVisibility ? " -rotate-180" : " ")
                  }
                />
              </div>
              <div
                className={
                  "absolute top-14 mt-1 right-0 bg-[#262626] rounded-xs transition-all min-w-[200px] text-white text-sm text-light " +
                  (accountVisibility
                    ? " "
                    : " translate-y-[-20%] opacity-0 pointer-events-none")
                }
              >
                <div className="p-2 mx-1 flex flex-row items-center gap-2 hover:bg-[#484444] rounded-sm mt-1 cursor-pointer">
                  <Pencil className="w-[16px] h-[16px]" />
                  <label>Manage Profiles</label>
                </div>

                <div className="p-2 mx-1 flex flex-row items-center gap-2 hover:bg-[#484444] rounded-sm cursor-pointer">
                  <Exit className="w-[16px] h-[16px]" />
                  <label>Exit Profile</label>
                </div>

                <div className="p-2 mx-1 flex flex-row items-center gap-2 hover:bg-[#484444] rounded-sm cursor-pointer">
                  <Person className="w-[16px] h-[16px]" />
                  <label>Account</label>
                </div>

                <div className="p-2 mx-1 flex flex-row items-center gap-2 hover:bg-[#484444] rounded-sm cursor-pointer">
                  <Question className="w-[16px] h-[16px]" />
                  <label>Home</label>
                </div>

                <div className="bg-[#344454] w-full h-[1px] my-1" />
                <label
                  className="block text-center cursor-pointer py-[.40rem] m-1 hover:bg-[#484444] rounded-sm"
                  onClick={async () => await auth.signOut()}
                >
                  Sign out Of Netflix
                </label>
              </div>
            </div>
          ) : (
            <button
              className="bg-customred text-white hover:bg-customredhover rounded-[5px] py-[.4rem] text-sm px-4"
              onClick={() => navigate("/signin")}
            >
              Sign in
            </button>
          )}
        </div>
      </Containter>
    </div>
  );
}
