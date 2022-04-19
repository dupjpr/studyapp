import { render, screen } from "@testing-library/react";
import App from "./App";

test("has study app heading", () => {
  render(<App />);
  const linkElement = screen.getByText(/Study App/i);
  expect(linkElement).toBeInTheDocument();
});

test("Should has 3 inputs", () => {
  render(<App />);
  const linkElement = screen.getAllByRole("textbox");
  expect(linkElement).toHaveLength(3);
  console.log(linkElement);
});

test("Should has 1 numeric inputs", () => {
  render(<App />);
  const linkElement = screen.getAllByRole("spinbutton");
  expect(linkElement).toHaveLength(1);
});

test("Should has 1 submit button", () => {
  render(<App />);
  const linkElement = screen.getAllByRole("button");
  expect(linkElement).toHaveLength(1);
});
