import React, { memo, useEffect, useMemo, useState } from "react";

const useIsLoading = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isReady, setIsReady] = useState(document.readyState === "complete");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_URL + "/health");
        console.log("\n@@@  file: useIsLoading.js:11  process.env.REACT_APP_URL:", process.env.REACT_APP_URL)
        if (response.ok) {
          setIsConnected(true);
        }
        setIsReady(document.readyState === "complete");
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const data = useMemo(
    () => ({
      isLoading: isConnected && isReady,
    }),
    [isConnected, isReady]
  );

  return data;
};

export default useIsLoading;
