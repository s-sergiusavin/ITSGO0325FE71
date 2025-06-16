

const getNews = async query => {
    try {
        const res = await fetch(`${ENDPOINT}?apiKey=${API_KEY}&q=${query}`)
        console.log(res);

        const response = await res.json()
        console.log(response)

        return response.articles;
    } catch(error) {
        console.error(error)
    }

}

export default {getNews};