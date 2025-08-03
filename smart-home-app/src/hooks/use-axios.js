import { useEffect, useState } from "react";
import axios from 'axios';

function useAxios(url) {
    axios.headers = {
        'x-api-key': 'reqres-free-v1'
    };

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')

    useEffect(() => {
        setLoading('Loading...');
        axios.get(url).then(res => {
            setLoading(false)
            res.data.data && setData(res.data.data)
        })
            .catch(err => {
                setLoading(false);
                setError(`An error has occured. Ackward. ${err}`)
            })
    }, [url])

    return { data, loading, error }
}

export default useAxios;