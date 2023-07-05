import React, { createContext, useContext, useEffect, useState } from "react";
import { useDB } from "./DatabaseContext";
import { resolveTripleslashReference } from "typescript";
import { useAuth } from "./AuthContext";

const MyListContext = createContext<any>(null);

export const useMyList = () => {
  return useContext(MyListContext);
};

export function MyListProvider({ children }: { children: React.ReactNode }) {
  const [MyList, setMyList] = useState<any>([]);
  const { getMyList, toggleShow, getById } = useDB();
  const { user } = useAuth();

  const fetchData = async () => {
    if (!user) return;
    const shows = await getMyList();
    setMyList(shows);
  };

  const toggle = async (showID: string) => {
    const response = await toggleShow(showID);
    const show = await getById(showID);
    if (response) {
      setMyList((old: any) => [...old, show]);
    } else {
      var newList = MyList;
      newList.splice(
        MyList.indexOf((m: any) => m._id == showID),
        1
      );

      setMyList(newList);
    }

    return response;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MyListContext.Provider value={{ MyList: MyList, toggle: toggle }}>
      {children}
    </MyListContext.Provider>
  );
}
