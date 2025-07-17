import { useEffect, useState } from "react";

const useFetch = (url) => {
    const apiConfig = {
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
    }

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url, apiConfig).then(response => {
            return response.json()
        }).then(data => {
            setData(data)
        })
    }, [url]);

    return data;
}

export default useFetch;