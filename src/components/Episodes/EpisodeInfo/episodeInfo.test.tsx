import { render } from "../../../redux/test-utils";
import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import EpisodeInfo from "./EpisodeInfo";

test("has a class episodeInfo-container", () => {
  render(
    <BrowserRouter>
      <EpisodeInfo />
    </BrowserRouter>
  );

  const element = screen.getByTestId("testEpisodesInfo");
  expect(element).toHaveClass("episodeInfo-container");
});

test("has a class home-container", () => {
  render(
    <BrowserRouter>
      <EpisodeInfo />
    </BrowserRouter>
  );

  const element = screen.getByTestId("testEpisodesInfo-msn");
  expect(element).toHaveClass("episodeInfo-container-msn");
});
