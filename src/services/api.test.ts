import { login } from "./api";

jest.spyOn(global, "fetch");

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve({ token: "ey" }),
//   })
// ) as any;

describe("login()", () => {
  const username = "jane.doe@megacoorp.com";
  const password = "__SUPER_SECRET__";

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    global.fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ token: "ey" }),
    });
  });

  it("[happy case] POST to https://reqres.in/api/login", async () => {
    await login({ username, password });
    expect(global.fetch).toHaveBeenCalledWith("https://reqres.in/api/login", {
      method: "POST",
      body: '{"username":"jane.doe@megacoorp.com","password":"__SUPER_SECRET__"}',
      headers: {
        "Content-type": "application/json",
      },
    });
  });

  it("[happy case] returns expected {username, token} obj", async () => {
    const credentials = await login({ username, password });
    expect(credentials).toEqual({
      username: "jane.doe@megacoorp.com",
      token: "ey",
    });
  });
});
