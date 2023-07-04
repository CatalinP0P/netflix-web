import React, { Children, createContext, useContext, useEffect } from "react";
import axios from "axios";

const DatabaseContext = createContext<any>(null);

export const useDB = () => {
  return useContext(DatabaseContext);
};

export function DatabaseProvdier({ children }: { children: React.ReactNode }) {
  const get = async () => {
    try {
      const shows = await axios.get(
        process.env.REACT_APP_SERVER_ADRESS + "shows"
      );
      return shows.data;
    } catch (err) {
      console.log("Axios Error:", err);
      return null;
    }
  };

  const getByCategory = async (category: string) => {
    try {
      const shows = await axios.get(
        process.env.REACT_APP_SERVER_ADRESS + "shows/category/" + category
      );
      return shows.data;
    } catch (err) {
      console.log("Axios Error:", err);
      return null;
    }
  };

  return (
    <DatabaseContext.Provider
      value={{ get: get, getByCategory: getByCategory }}
    >
      {children}
    </DatabaseContext.Provider>
  );
}
