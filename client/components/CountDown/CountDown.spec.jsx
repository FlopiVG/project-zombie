import React from "react";
import CountDown from "./CountDown";
import { render } from "react-testing-library";

describe("CountDown component", () => {
  let component;

  beforeEach(() => {
    component = render(<CountDown />);
  });

  it("should render properly", () => {
    expect(component.container).toBeTruthy();
  });
});
