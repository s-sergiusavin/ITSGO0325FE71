import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

async function login(payload) {
  const respons = await axios.post("/login", payload);

  console.dir(respons);

  return respons;
}

async function register(payload) {
  return axios.post("/register", payload);
}

async function logout(params) {
  localStorage.removeItem("token");
}

const authService = {
  login, // similar cu cu login:login() => cheia este egala cu valoarea
  register,
  logout,
};

export default authService;
