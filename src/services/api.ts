async function post<T>(url: string, data: Record<string, unknown>) {
  let body;
  try {
    body = JSON.stringify(data);
  } catch (error) {
    throw {
      where: "api.post()",
      when: { url, data },
      what: error,
    };
  }

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body,
  })
    .then((res) => res.json())
    .then((data: T) => {
      console.debug("[api.post()] " + data);
      return data;
    })
    .catch((err) => {
      throw {
        where: "api.post()",
        when: { url, data },
        what: err,
      };
    });
}

interface LoginResponse {
  token: string;
}

export async function login(user: { username: string; password: string }) {
  const { token } = await post<LoginResponse>(
    "https://reqres.in/api/login",
    user
  );
  return { token, username: user.username };
}
