import { useState } from "react";
import "./login-form.scss";

interface Props {
  onSubmit?: ({ username, password }: ReactLoginSolo.UserCredentials) => void;
}

function LoginForm({ onSubmit }: Props): JSX.Element {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit && onSubmit({ username, password });
  };

  return (
    <section className="login-form">
      <form onSubmit={handleSubmit} role="form">
        <input
          type="email"
          required
          className="login-form__email"
          placeholder="email"
          onChange={(v) => setUsername(v.target.value)}
        />
        <input
          aria-label="password"
          type="password"
          required
          className="login-form__password"
          placeholder="password"
          onChange={(v) => setPassword(v.target.value)}
        />
        <button type="submit">go</button>
      </form>
    </section>
  );
}

export default LoginForm;
