import { useState } from "react";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
const useHttp = (requestConfig,dataTransformFn ) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig?.method || "GET",
        headers: { ...headers, ...(requestConfig?.headers || {}) },
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      if (!response.ok) throw new Error("Request Failed");
      const data = await response.json();
      dataTransformFn(data);
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  };
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
