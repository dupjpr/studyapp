import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./NavBar";

test("has text characters in the nav", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Characters/i);
  expect(linkElement).toBeInTheDocument();
});

test("has text Episodes in the nav", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Episodes/i);
  expect(linkElement).toBeInTheDocument();
});
