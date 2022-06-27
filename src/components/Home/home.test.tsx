import { render } from "../../redux/test-utils";
import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

test("has a class home-container", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const element = screen.getByTestId("testHome");
  expect(element).toHaveClass("home-container");
});
