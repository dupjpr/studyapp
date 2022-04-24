import { render } from "../../redux/test-utils";
import { screen, fireEvent } from "@testing-library/react";
import Tabs from "./Tabs";

describe("general test to the tabs component", () => {
  test("has on tab calle Users", () => {
    render(<Tabs />);
    const tabButton = screen.getByText(/Users/i);
    expect(tabButton).toBeInTheDocument();
  });

  test("has on tab calle New User", () => {
    render(<Tabs />);
    const tabButton = screen.getByText(/New User/i);
    expect(tabButton).toBeInTheDocument();
  });

  test("click on the New User tab", () => {
    render(<Tabs />);
    const tabButton = screen.getByText(/New User/i);
    fireEvent.click(tabButton);
    expect(tabButton).toHaveClass("tabsButtonActive");
  });

  test("click on the Users tab", () => {
    render(<Tabs />);
    const tabButton = screen.getByText(/Users/i);
    fireEvent.click(tabButton);
    expect(tabButton).toHaveClass("tabsButtonActive");
  });
});
