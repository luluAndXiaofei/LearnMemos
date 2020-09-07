import axios from "axios";

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

export async function login(loginInfo) {
  await delay(2000);
  var res = await axios.post("/api/user/login", loginInfo);
  var token = res.headers.authorization;
  if (token) {
    localStorage.setItem("token", token);
  }

  return res.data;
}

export async function logout() {
  localStorage.removeItem("token");
}

export async function whoami() {
  await delay(2000);
  var token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  var result = await axios.get("/api/user/whoami", {
    headers: {
      authorization: `bearer ${token}`,
    },
  });

  return result.data.data;
}

export async function reg(userInfo) {
  var res = await axios.post("/api/user/reg", userInfo);
  return res.data;
}
