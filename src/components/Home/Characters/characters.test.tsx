import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { atom } from "jotai";
import Characters from "./Characters";

test("should render the general wrapper of the cards", () => {
  render(
    <BrowserRouter>
      <Characters />
    </BrowserRouter>
  );

  const wrapperCards = screen.getByTestId("testCharacters");
  expect(wrapperCards).toBeInTheDocument();
});

test("should render the cards", async () => {
  render(
    <BrowserRouter>
      <Characters />
    </BrowserRouter>
  );

  await waitFor(() => {
    const elemento = screen.getByTestId("testCard");
    expect(elemento).toBeInTheDocument();
  });
});
