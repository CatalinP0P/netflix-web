import React, { useEffect, useState } from "react";
import heroImage from "../../assets/johnwick4.jpeg";
import Containter from "../../components/Containter";
import PlayButton from "../../components/PlayButton";
import InfoButton from "../../components/InfoButton";
import { useDB } from "../../context/DatabaseContext";
import HorizontalShowcase from "../../components/HorizontalShowcase";

export default function Home() {
  const [showsTrending, setShowsTrending] = useState(null);
  const [showsAction, setShowsAction] = useState(null);
  const [showsComedy, setShowsComedy] = useState(null);
  const [showsHorror, setShowsHorror] = useState(null);
  const [showsRomance, setShowsRomance] = useState(null);
  const [showsDocumentaries, setShowsDocumentaries] = useState(null);
  const db = useDB();

  const fetchShows = async () => {
    const trending = await db.get("");
    setShowsTrending(trending);

    const action = await db.getByCategory("Action");
    setShowsAction(action);

    const comedy = await db.getByCategory("Comedy");
    setShowsComedy(comedy);

    const horror = await db.getByCategory("Horror");
    setShowsHorror(horror);

    const romance = await db.getByCategory("Romance");
    setShowsRomance(romance);

    const documentaries = await db.getByCategory("Documentary");
    setShowsDocumentaries(documentaries);
  };

  useEffect(() => {
    fetchShows();
  }, []);

  return (
    <>
      <img
        className="absolute top-0 left-0 w-full h-screen object-cover z-[1]"
        src={heroImage}
      />
      <div className="absolute top-0 left-0 w-full min-h-screen gradient-transparent-to-black z-[5]" />

      <Containter className="text-white z-[100] pt-48">
        <div className="w-[45%] flex flex-col gap-3 pb-8">
          <label className="text-4xl font-bold z-[100]">
            John Wick: Chapter 4
          </label>
          <div className="flex flex-row gap-2 z-[100] items-baseline">
            <label className="text-green-600 font-semibold text-sm">
              79% Match
            </label>
            <label className="text-muted">2023</label>
          </div>

          <p className="text-white text-sm font-thin z-[100]">
            With the price on his head ever increasing, John Wick uncovers a
            path to defeating The High Table. But before he can earn his
            freedom, Wick must face off against a new enemy with powerful
            alliances across the globe and forces that turn old friends into
            foes.
          </p>
          <div className="flex flex-row gap-2 z-[100]">
            <PlayButton />
            <InfoButton />
          </div>
        </div>
        {showsAction && showsTrending ? (
          <HorizontalShowcase
            className="mt-16"
            title="Trending Now"
            shows={showsTrending}
          />
        ) : null}

        {showsAction ? (
          <HorizontalShowcase
            className="mt-16"
            title="Action Thrillers"
            shows={showsAction}
          />
        ) : null}

        {showsComedy ? (
          <HorizontalShowcase
            className="mt-16"
            title="Comedies"
            shows={showsComedy}
          />
        ) : null}

        {showsHorror ? (
          <HorizontalShowcase
            className="mt-16"
            title="Scary Movies"
            shows={showsHorror}
          />
        ) : null}

        {showsRomance ? (
          <HorizontalShowcase
            className="mt-16"
            title="Romance Movies"
            shows={showsRomance}
          />
        ) : null}

        {showsDocumentaries ? (
          <HorizontalShowcase
            className="mt-16"
            title="Documentaries"
            shows={showsDocumentaries}
          />
        ) : null}
      </Containter>
    </>
  );
}
