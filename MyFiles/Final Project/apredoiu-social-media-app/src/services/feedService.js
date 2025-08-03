import axios from "axios";
import setAxiosDefaults from "./config";

setAxiosDefaults();

async function get(params) {
    const response = await axios.get('/posts')

    return response.data;
}

const feedService = {
    get
}

export default feedService;