import { screen, render } from "@testing-library/react";
import LoginForm from "./login-form";

describe("<LoginForm />", () => {
  it("renders .login-form", () => {
    render(<LoginForm />);
    expect(screen.getByText("LOGIN HERE")).toBeInTheDocument();
  });
});
