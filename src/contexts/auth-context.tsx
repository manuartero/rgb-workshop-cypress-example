import { createContext } from "react";

function setAccessToken(token: string) {
  localStorage.setItem("ACCESS_TOKEN", token);
}

function getAccessToken() {
  return localStorage.getItem("ACCESS_TOKEN");
}

const AuthContext = createContext<{
  token: string | null;
  setAccessToken: (token: string) => void;
}>({
  token: null,
  setAccessToken: () => {
    return;
  },
});

interface Props {
  children: React.ReactElement;
}

export function AuthProvider({ children }: Props) {
  return (
    <AuthContext.Provider value={{ token: getAccessToken(), setAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
