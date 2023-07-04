import React, { createContext, useContext, useState } from "react";

const PopupContext = createContext<any>(null);

export const usePopup = () => {
  return useContext(PopupContext);
};

export function PopupProvider({ children }: { children: React.ReactNode }) {
  const [showVisibility, setShowVisibility] = useState(false);
  const [mobileMenuVisibility, setMobileMenuVisibility] = useState(false);
  const [show, setShow] = useState(null);

  const closeAll = () => {
    setShowVisibility(false);
    setMobileMenuVisibility(false);
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
      }}
    >
      {showVisibility && (
        <div
          className="fixed left-0 top-0 w-full h-full bg-[rgba(0,0,0,.85)] z-[1000]"
          onClick={closeAll}
        ></div>
      )}
      {mobileMenuVisibility && (
        <div
          className="fixed left-0 top-0 w-full h-full z-[1000]"
          onClick={() => closeAll()}
        ></div>
      )}
      {children}
    </PopupContext.Provider>
  );
}
