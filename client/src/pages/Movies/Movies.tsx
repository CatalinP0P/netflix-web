import React, { useEffect, useState } from "react";
import { useDB } from "../../context/DatabaseContext";
import GridShowcase from "../../components/GridShowcase";

export default function Movies() {
  const db = useDB();
  const [shows, setShows] = useState<any[]>([]);

  const fetchData = async () => {
    setShows(await db.get());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <GridShowcase shows={shows} />;
}
