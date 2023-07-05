import React, { lazy, useEffect, useState } from "react";
import { useDB } from "../../context/DatabaseContext";
import GridShowcase from "../../components/GridShowcase";

export default function NewAndPopular() {
  const db = useDB();
  const [shows, setShows] = useState<any[]>([]);

  const fetchData = async () => {
    setShows(await db.getNew());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <GridShowcase shows={shows} />;
}
