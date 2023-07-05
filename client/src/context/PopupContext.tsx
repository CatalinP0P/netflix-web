import React, { createContext, useContext, useEffect, useState } from "react";
import { useMyList } from "./MyListContext";

const PopupContext = createContext<any>(null);

export const usePopup = () => {
  return useContext(PopupContext);
};

export function PopupProvider({ children }: { children: React.ReactNode }) {
  const [showVisibility, setShowVisibility] = useState(false);
  const [mobileMenuVisibility, setMobileMenuVisibility] = useState(false);
  const [accountVisibility, setAccountVisibility] = useState(false);

  const [show, setShow] = useState<any>(null);

  const closeAll = () => {
    setShowVisibility(false);
    setMobileMenuVisibility(false);
    setAccountVisibility(false);
    setShow(null);
  };

  return (
    <PopupContext.Provider
      value={{
        closeAll: closeAll,
        showVisibility: showVisibility,
        show: show,
        setShow: setShow,
        setShowVisibility: setShowVisibility,
        mobileMenuVisibility: mobileMenuVisibility,
        setMobileMenuVisibility: setMobileMenuVisibility,
        accountVisibility: accountVisibility,
        setAccountVisibility: setAccountVisibility,
      }}
    >
      {showVisibility && (
        <div
          className="fixed left-0 top-0 w-full h-full bg-[rgba(0,0,0,.85)] z-[1000]"
          onClick={closeAll}
        ></div>
      )}
      {(mobileMenuVisibility || accountVisibility) && (
        <div
          className="fixed left-0 top-0 w-full h-full z-[1000]"
          onClick={() => closeAll()}
        ></div>
      )}
      {children}
    </PopupContext.Provider>
  );
}
