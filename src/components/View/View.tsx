import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { fetchCharacters } from "../../redux/slices/charactersSlice";
import { fetchEpisodes } from "../../redux/slices/episodesSlice";

import Episodes from "../Episodes/episodes";
import Home from "../Home/Home";

import "./view.style.scss";

const View: React.FC = () => {
  const data = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
    dispatch(fetchEpisodes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(data);

  return (
    <section className="viewSectionContainer" data-testid="testView">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
      </Routes>
    </section>
  );
};

export default View;
