import React, { useState, useEffect } from "react";
import searchSvg from "../../assets/search.svg";
import { useDB } from "../../context/DatabaseContext";
import { useSearch } from "../../context/SearchContext";

export default function SearchBar() {
  const [searchVisiblity, setSearch] = useState(false);
  const [titleQ, setTitleQ] = useState("");
  const db = useDB();
  const { search } = useSearch();

  const handleChange = async (e: any) => {
    await search(e.target.value);
  };

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
        onChange={handleChange}
        placeholder="Search..."
        className={
          "outline-none bg-transparent text-white px-2 w-full " +
          (searchVisiblity ? " " : " hidden")
        }
      />
    </div>
  );
}
