import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Filter from "./Filter";

test("should contain the text Choose a species:", () => {
  render(
    <BrowserRouter>
      <Filter />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Choose a species:/i);
  expect(linkElement).toBeInTheDocument();
});
