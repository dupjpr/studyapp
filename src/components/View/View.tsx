import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { fetchPosts } from "../../redux/slices/usersListSlice";
import Input from "../Input/Input";
import Home from "../Home/Home";

import "./view.style.scss";

const View: React.FC = () => {
  const data = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(data);

  return (
    <section className="viewSectionContainer">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Input />} />
      </Routes>
    </section>
  );
};

export default View;
