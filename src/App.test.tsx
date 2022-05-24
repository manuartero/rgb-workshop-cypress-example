import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const heading = screen.getByRole("banner");
  expect(heading.textContent).toEqual("LOGIN HERE");
  expect(heading).toBeInTheDocument();
});
