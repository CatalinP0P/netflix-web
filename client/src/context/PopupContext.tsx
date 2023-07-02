import React, { createContext, useContext, useState } from "react";

const PopupContext = createContext<any>(null);

export const usePopup = () => {
  return useContext(PopupContext);
};

export function PopupProvider({ children }: { children: React.ReactNode }) {
  const [showVisibility, setShowVisibility] = useState(false);
  const [show, setShow] = useState(null);

  const closeAll = () => {
    setShowVisibility(false)
    setShow(null)
  };

  return (
    <PopupContext.Provider
      value={{
        closeAll: closeAll,
        showVisibility: showVisibility,
        show: show,
        setShow: setShow,
        setShowVisibility: setShowVisibility
      }}
    >
      {showVisibility && (
        <div
          className="absolute left-0 top-0 w-full h-full bg-[rgba(0,0,0,.85)] z-[1000]"
          onClick={closeAll}
        ></div>
      )}
      {children}
    </PopupContext.Provider>
  );
}
