import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

test("has text in the footer", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Code by Dup-K/i);
  expect(linkElement).toBeInTheDocument();
});
