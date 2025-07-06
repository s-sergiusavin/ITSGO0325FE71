
const ENDPOINT = 'https://newsapi.org/v2/everything';
const API_KEY = 'af0e766a1ccf475588965f28a4346fe4';

const getNews = async query => {
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