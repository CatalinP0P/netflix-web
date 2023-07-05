import React, { Children, createContext, useContext, useEffect } from "react";
import axios from "axios";

const DatabaseContext = createContext<any>(null);

export const useDB = () => {
  return useContext(DatabaseContext);
};

var req = axios.create({
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

  const getById = async (showID: string) => {
    const show = await req.get("shows/" + showID);
    return show.data;
  };

  const getRandomShow = async () => {
    const show = await req.get("/shows/random");
    return show.data;
  };

  const getMyList = async () => {
    const shows = await req.get("/shows/mylist");
    return shows.data;
  };

  const toggleShow = async (showID: string) => {
    const response = await req.post("/shows/mylist/" + showID);
    return response.data;
  };

  const showInList = async (showID: string) => {
    const response = await req.get("/shows/mylist/" + showID);
    return response.data;
  };

  const setToken = (token: string) => {
    req = axios.create({
      baseURL: process.env.REACT_APP_SERVER_ADRESS,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  };

  return (
    <DatabaseContext.Provider
      value={{
        setToken: setToken,
        get: get,
        getByCategory: getByCategory,
        getRandomShow: getRandomShow,
        getById: getById,

        getMyList: getMyList,
        toggleShow: toggleShow,
        showInList: showInList,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  );
}
