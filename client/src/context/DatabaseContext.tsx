import React, { Children, createContext, useContext } from "react";
import axios from "axios";

const DatabaseContext = createContext<any>(null);

export const useDB = () => {
  return useContext(DatabaseContext);
};

export function DatabaseProvdier({ children }: { children: React.ReactNode }) {
  const get = async () => {
    try {
      const shows = await axios.get("http://localhost:3001/shows");
      return shows.data;
    } catch (err) {
      console.log("Axios Error:", err);
      return null;
    }
  };

  return (
    <DatabaseContext.Provider value={{ get: get }}>
      {children}
    </DatabaseContext.Provider>
  );
}
