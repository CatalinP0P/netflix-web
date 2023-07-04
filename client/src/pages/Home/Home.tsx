import React, { useEffect, useState } from "react";
import heroImage from "../../assets/johnwick4.jpeg";
import Containter from "../../components/Containter";
import PlayButton from "../../components/PlayButton";
import InfoButton from "../../components/InfoButton";
import { useDB } from "../../context/DatabaseContext";
import HorizontalShowcase from "../../components/HorizontalShowcase";
import { usePopup } from "../../context/PopupContext";

export default function Home() {
  const [showRandom, setRandomShow] = useState<any>();
  const [showsTrending, setShowsTrending] = useState(null);
  const [showsAction, setShowsAction] = useState(null);
  const [showsComedy, setShowsComedy] = useState(null);
  const [showsHorror, setShowsHorror] = useState(null);
  const [showsRomance, setShowsRomance] = useState(null);
  const [showsDocumentaries, setShowsDocumentaries] = useState(null);

  const [loading, setLoading] = useState(true);
  const popup = usePopup();
  const db = useDB();

  const openShow = (show: any) => {
    popup.setShow(show);
    popup.setShowVisibility(true);
  };

  const fetchShows = async () => {
    const random = await db.getRandomShow();
    setRandomShow(random);
    console.log(random);

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

    setLoading(false);
  };

  useEffect(() => {
    fetchShows();
  }, []);

  return !loading ? (
    <>
      <img
        className="absolute top-0 left-0 w-full h-screen object-cover z-[1]"
        src={showRandom.imageURL}
      />
      <div className="absolute top-0 left-0 w-full min-h-screen gradient-transparent-to-black z-[5]" />

      <Containter className="text-white z-[100] pt-48">
        <div className="w-full lg:w-[45%] flex flex-col gap-3 pb-8">
          <label className="text-4xl font-bold z-[100]">
            {showRandom.title}
          </label>
          <div className="flex flex-row gap-2 z-[100] items-baseline">
            <label className="text-green-600 font-semibold text-sm">
              79% Match
            </label>
            <label className="text-muted">{showRandom.year}</label>
          </div>

          <p className="text-white text-sm font-thin z-[100]">
            {showRandom.description}
          </p>
          <div className="flex flex-row gap-2 z-[100]">
            <PlayButton onClick={() => openShow(showRandom)} />
            <InfoButton onClick={() => openShow(showRandom)} />
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
  ) : null;
}
