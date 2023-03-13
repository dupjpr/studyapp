import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Header from "./Header";

test("has text in the footer", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Study App/i);
  expect(linkElement).toBeInTheDocument();
});
