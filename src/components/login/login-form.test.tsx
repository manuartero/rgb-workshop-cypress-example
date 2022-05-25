import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./login-form";

describe("<LoginForm />", () => {
  it("renders .login-form", () => {
    render(<LoginForm />);
    expect(screen.getByRole("form")).toBeInTheDocument();
  });

  it("renders input text, input password and login button", () => {
    render(<LoginForm />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByLabelText("password")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("calls onSubmit()", () => {
    const onSubmit = jest.fn();
    render(<LoginForm onSubmit={onSubmit} />);

    const emailInput = screen.getByRole("textbox");
    const passwordInput = screen.getByLabelText("password");
    const loginButton = screen.getByRole("button");

    userEvent.type(emailInput, "jane.doe@megacoorp.com");
    userEvent.type(passwordInput, "123456");
    fireEvent.click(loginButton);

    expect(onSubmit).toHaveBeenCalledWith({
      username: "jane.doe@megacoorp.com",
      password: "123456",
    });
  });
});
