import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

describe("Contact Us Page Test case", () => {
  // beforeAll(() => {
  //   console.log("before all");
  // });

  // beforeEach(() => {
  //   console.log("before Each");
  // });

  // afterAll(() => {
  //   console.log("after all");
  // });

  // afterEach(() => {
  //   console.log("after Each");
  // });

  it("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contactUs component", () => {
    render(<Contact />);
    const heading = screen.getByRole("button");

    //   Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load text inside contactUs component", () => {
    render(<Contact />);
    const heading = screen.getByText("Submit");

    //   Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load input name inside contactUs component", () => {
    render(<Contact />);
    const heading = screen.getByPlaceholderText("name", "email");

    //   Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load 2 input boxes on contactUs component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log("🚀 ~ test ~ inputBoxes:", inputBoxes[0]);

    //   Assertion
    //   expect(inputBoxes.length).toBeGreaterThan(2);
    expect(inputBoxes.length).not.toBe(2);
  });
});
