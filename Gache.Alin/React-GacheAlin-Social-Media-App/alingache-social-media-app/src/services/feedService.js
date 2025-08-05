import axios from "axios";
import setAxiosDefaults from "./config";

setAxiosDefaults();

async function getPost(params) {
  const response = await axios.get("/posts");

  return response.data;
}
async function getFriends() {
  const response = await axios.get("/friends");

  return response.data;
}

const feedService = {
  getPost,
  getFriends,
};

export default feedService;
