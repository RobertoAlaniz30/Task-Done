import axios from "axios";
const ENDPOINT_PATH = "https://reqres.in/api/";

function signIn(email, password) {
  const user = { email, password };
  return axios.post(ENDPOINT_PATH + "regiser", user);
}

function login(user) {
  return axios.post(ENDPOINT_PATH + "login", user);
}

export default { signIn, login };
