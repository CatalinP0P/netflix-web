import React, { useEffect } from "react";
import { useMyList } from "../../context/MyListContext";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Containter from "../../components/Containter";
import { usePopup } from "../../context/PopupContext";

export default function MyList() {
  const { user } = useAuth();
  const { MyList } = useMyList();

  const navigate = useNavigate();
  const popup = usePopup();

  useEffect(() => {
    if (!user) return navigate("/signin");
  }, [user]);

  const openShow = (show: any) => {
    popup.setShow(show);
    popup.setShowVisibility(true);
  };

  return (
    <Containter className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-12 mt-24">
      {MyList.map((show: any) => {
        return (
          <img
            key={show._id}
            className="w-full h-[100%] hover:scale-110 transition-all"
            src={show.imageURL}
            onClick={() => openShow(show)}
          ></img>
        );
      })}
    </Containter>
  );
}
