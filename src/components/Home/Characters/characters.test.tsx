import { render } from "../../../redux/test-utils";
import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Characters from "./Characters";

test("has a class home-container", () => {
  render(
    <BrowserRouter>
      <Characters />
    </BrowserRouter>
  );

  const element = screen.getByTestId("testCharacters");
  expect(element).toHaveClass("characters-container");
});

test("nn", () => {
  render(
    <BrowserRouter>
      <Characters />
    </BrowserRouter>
  );

  const element = screen.getAllByTestId("testCard");
  // expect(element).toHaveClass("characters-container");
});
