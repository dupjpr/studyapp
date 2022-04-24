import { render } from "../../redux/test-utils";
import { screen } from "@testing-library/react";
import Input from "./Input";

describe("general test to the form", () => {
  test("Should has 3 inputs", () => {
    render(<Input />);
    const formElement = screen.getAllByRole("textbox");
    expect(formElement).toHaveLength(3);
    console.log(formElement);
  });

  test("Should has 1 numeric inputs", () => {
    render(<Input />);
    const formElement = screen.getAllByRole("spinbutton");
    expect(formElement).toHaveLength(1);
  });

  test("Should has 1 submit button", () => {
    render(<Input />);
    const formElement = screen.getAllByRole("button");
    expect(formElement).toHaveLength(1);
  });
});
