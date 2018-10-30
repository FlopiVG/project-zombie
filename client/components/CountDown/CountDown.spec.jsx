import React from "react";
import CountDown from "./CountDown";
import { render, fireEvent } from "react-testing-library";

describe("CountDown component", () => {
  let component, props;

  beforeEach(() => {
    props = {
      buttonLabel: "foo",
      handleStart: jest.fn(),
      handleStop: jest.fn()
    };

    component = render(<CountDown {...props} />);
  });

  it("should render properly", () => {
    expect(component.container).toBeTruthy();
  });
});
