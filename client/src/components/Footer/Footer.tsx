import React from "react";
import { ReactComponent as FacebookSVG } from "../../assets/facebook-svgrepo-com.svg";
import { ReactComponent as TwitterSVG } from "../../assets/twitter-svgrepo-com.svg";
import { ReactComponent as InstagramSVG } from "../../assets/instagram.svg";
import { ReactComponent as YoutubeSVG } from "../../assets/youtube-svgrepo-com.svg";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center w-full pt-24 pb-8 max-w-[900px] mx-auto">
      <div className="ms-2 flex flex-row items-center gap-6 justify-start pb-8">
        <FacebookSVG className="w-[20px] h-[20px] fill-white" />
        <InstagramSVG className="w-[24px] h-[24px] fill-white" />
        <TwitterSVG className="w-[20px] h-[20px] fill-white" />
        <YoutubeSVG className="w-[24px] h-[24px]" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full text-xs text-[#a3a3a3] mx-auto">
        <div className="flex flex-col gap-4">
          <label>Audio Description</label>
          <label>Investor Relations</label>
          <label>Legal Notices</label>
          <button className="border border-secondary py-2 px-4 w-fit mt-2">
            Service code
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <label>Help Center</label>
          <label>Jobs</label>
          <label>Cookies Preferences</label>
        </div>

        <div className="flex flex-col gap-4">
          <label>Gift Cards</label>
          <label>Terms of use</label>
          <label>Corporate Information</label>
        </div>

        <div className="flex flex-col gap-4">
          <label>Media Center</label>
          <label>Privacy</label>
          <label>Contact Us</label>
        </div>
      </div>
      <label className="text-[#a3a3a3] mt-6 text-xs font-light">
        © 2022-2023 Netflix.
      </label>
    </div>
  );
}
