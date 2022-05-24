function login({ username, password }: { username: string; password: string }) {
  return Promise.resolve({ username, token: "ey" });
}

export default {
  login,
};
