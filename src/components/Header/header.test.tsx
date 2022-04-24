import { render } from "../../redux/test-utils";
import { screen } from "@testing-library/react";
import Header from "./Header";

test("has study app heading", () => {
  render(<Header />);
  const linkElement = screen.getByText(/Study App/i);
  expect(linkElement).toBeInTheDocument();
});
