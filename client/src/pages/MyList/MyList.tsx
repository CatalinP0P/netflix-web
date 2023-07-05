import React, { useEffect } from "react";
import { useMyList } from "../../context/MyListContext";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Containter from "../../components/Containter";
import { usePopup } from "../../context/PopupContext";
import GridShowcase from "../../components/GridShowcase";

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

  return <GridShowcase shows={MyList} />;
}
