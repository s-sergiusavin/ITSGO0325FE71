const ENDPOINT = 'https://weatherstack.com/';
const API_KEY = 'b075248b7d6a7dc48599cdcc232780e3';

const getWeather = async query => {
    try {
        // const res = await fetch(`https://newsapi.org/v2/everything?apiKey=af0e766a1ccf475588965f28a4346fe4&q=test`)
        const res = await fetch(`${ENDPOINT}?apiKey=${API_KEY}&q=${query}`)
        console.log(res);

        const response = await res.json()
        console.log(response)

        return response.articles;
    } catch(error) {
        console.error(error)
    }
}

// async function getNews(query) {
//     const response = await axios.get(`${ENDPOINT}?apiKey=${API_KEY}&q=${query}`);

//     return response.data.articles;
// }

export default { getNews };