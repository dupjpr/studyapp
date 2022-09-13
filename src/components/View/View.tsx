import { Routes, Route } from "react-router-dom";
import Episodes from "../Episodes/episodes";
import Home from "../Home/Home";

import "./view.style.scss";

const View: React.FC = () => {
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
