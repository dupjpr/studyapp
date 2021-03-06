import { render } from "../../redux/test-utils";
import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Episodes from "./episodes";

test("has a class home-container", () => {
  render(
    <BrowserRouter>
      <Episodes />
    </BrowserRouter>
  );

  const element = screen.getByTestId("testEpisodes");
  expect(element).toHaveClass("episode-main-container");
});
