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
  var resp = await axios.post("/api/user/login", loginInfo);
  var token = resp.headers.authorization; // 拿到服务器的令牌
  if (token) {
    localStorage.setItem("token", token);
  }
  return resp.data;
}

export async function whoAmI() {
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

export function logout() {
  localStorage.removeItem("token");
}

export async function reg(userInfo) {
  var res = await axios.post("/api/user/reg", userInfo);
  return res.data;
}
