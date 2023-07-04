import React, { Children, createContext, useContext, useEffect } from "react";
import axios from "axios";

const DatabaseContext = createContext<any>(null);

export const useDB = () => {
  return useContext(DatabaseContext);
};

const req = axios.create({
  baseURL: process.env.REACT_APP_SERVER_ADRESS,
});

export function DatabaseProvdier({ children }: { children: React.ReactNode }) {
  const get = async () => {
    try {
      const shows = await req.get("shows");
      return shows.data;
    } catch (err) {
      console.log("Axios Error:", err);
      return null;
    }
  };

  const getByCategory = async (category: string) => {
    try {
      const shows = await req.get("shows/category/" + category);
      return shows.data;
    } catch (err) {
      console.log("Axios Error:", err);
      return null;
    }
  };

  const getRandomShow = async () => {
    const show = await req.get("/shows/random");
    return show.data;
  };

  return (
    <DatabaseContext.Provider
      value={{
        get: get,
        getByCategory: getByCategory,
        getRandomShow: getRandomShow,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  );
}
