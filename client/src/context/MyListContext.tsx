import React, { createContext, useContext, useEffect, useState } from "react";

const MyListContext = createContext<any>(null);

export const useMyList = () => {
  return useContext(MyListContext);
};

export function MyListProvider({ children }: { children: React.ReactNode }) {
  const [MyList, setMyList] = useState([]);

  useEffect(() => {}, []);

  return <MyListContext.Provider value={{}}>{children}</MyListContext.Provider>;
}
