import { useState } from "react";
import { useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("could not fetch the data");
        }
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted err");
        } else {
          setError(err.message);
          setIsLoading(false);
        }
      });

    return () => abortCont.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
