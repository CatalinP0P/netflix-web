import React, { useEffect, useState, createContext, useContext } from "react";
import { useDB } from "./DatabaseContext";

const SearchContext = createContext<any>(null);

export const useSearch = () => {
  return useContext(SearchContext);
};

export function SerachProvider({ children }: { children: React.ReactNode }) {
  const [shows, setShows] = useState<any>(null);
  const [q, setQ] = useState("");

  const db = useDB();

  const search = async (title: string) => {
    setQ(title);
    if (title.length <= 1) {
      setShows(null);
    } else {
      const results = await db.searchByTitle(title);
      setShows(results);
    }
  };

  return (
    <SearchContext.Provider value={{ search: search, shows: shows, q: q }}>
      {children}
    </SearchContext.Provider>
  );
}
