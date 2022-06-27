import { render } from "../../redux/test-utils";
import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import View from "./View";

test("has a class viewSectionContainer", () => {
  render(
    <BrowserRouter>
      <View />
    </BrowserRouter>
  );
  const element = screen.getByTestId("testView");
  expect(element).toHaveClass("viewSectionContainer");
});
