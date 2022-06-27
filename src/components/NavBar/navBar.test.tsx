import { render } from "../../redux/test-utils";
import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";

test("has two links in tne navBar", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
  const element = screen.getAllByRole("link");
  expect(element).toHaveLength(2);
});

test("have a link called  Characteres", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
  const element = screen.getByText("Characters");
  expect(element).toBeInTheDocument();
});

test("have a link called Episodes", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
  const element = screen.getByText("Episodes");
  expect(element).toBeInTheDocument();
});
