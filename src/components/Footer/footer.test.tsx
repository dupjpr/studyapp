import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("has text in the footer", () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Code by Dup-K/i);
  expect(linkElement).toBeInTheDocument();
});
