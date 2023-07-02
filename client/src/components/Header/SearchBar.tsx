import React, { useState } from "react";
import searchSvg from "../../assets/search.svg"

export default function SearchBar() {
  const [searchVisiblity, setSearch] = useState(false);

  const toggleSearch = () => {
    setSearch(!searchVisiblity);
  };

  return (
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
  );
}
