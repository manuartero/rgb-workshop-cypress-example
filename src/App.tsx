import { LoginForm } from "components";
import "./App.scss";
import { login } from "services/api";
import { AuthProvider } from "contexts/auth-context";
import { useAuth } from "hooks/use-auth";
import { useState } from "react";

function Auth() {
  const { setAccessToken } = useAuth();
  const [token, setToken] = useState<string | null>(null);

  const doLogin = (userCredentials: ReactLoginSolo.UserCredentials) => {
    login(userCredentials).then(({ token }) => {
      setToken(token);
      setAccessToken(token);
    });
  };

  if (token) {
    return <div className="token">{token}</div>;
  }
  return <LoginForm onSubmit={doLogin} />;
}

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <AuthProvider>
            <Auth />
          </AuthProvider>
        </header>
      </div>
    </>
  );
}

export default App;
