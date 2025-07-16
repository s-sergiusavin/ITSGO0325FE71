import { use, useEffect, useState } from "react";
import axios from "axios";

function useAxios(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.headers = {
      "x-api-key": "reqres-free-v1",
    };
    setLoading("Loading...");
    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        res.data.data && setData(res.data.data);
        console.log(res);
      })
      .catch((error) => {
        setLoading(false);
        setError(`An error hase occured ${error}`);
      });
  }, [url]);
  return { data, loading, error };
}
export default useAxios;
