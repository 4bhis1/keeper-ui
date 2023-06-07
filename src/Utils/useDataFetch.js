import { useState, useEffect } from "react";

const useDataFetch = ({
  url,
  reloadEvents = [],
  method = "GET",
  queryParams,
  headers = {},
}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const prefixUrl = process.env.REACT_APP_URL;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(prefixUrl + url, {
          method: method,
          body: JSON.stringify(queryParams),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...headers,
          },
        });
        const responseData = await response.json();

        setData(responseData);
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [...reloadEvents, url]);

  return { data, error, isLoading };
};

export default useDataFetch;
