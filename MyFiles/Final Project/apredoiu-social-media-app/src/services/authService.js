import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

async function login(payload) {
    const response = await axios.post('/login', payload);

    console.dir(response);

    return response;
}

async function register(payload) {
    return axios.post('/register', payload)
}

async function logout(params) {
    localStorage.removeItem('token');
}

const authService = {
    login: login, // similar cu aceeasi scriere ca mai jos
    register,
    logout
}

export default authService;