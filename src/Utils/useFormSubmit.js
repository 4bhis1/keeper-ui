import { useState } from "react";

const useFormSubmit = (initialData, url, afterSuccess) => {
  const [formData, setFormData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    setError(null);

    try {
      let data = await fetch(process.env.REACT_APP_URL + url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      data = await data.json();
      console.log("\n@@@  file: useFormSubmit.js:24  data:", data);

      if (data) {
        setResponse(data);
      }

      if (afterSuccess && typeof afterSuccess === "function") {
        console.log("kk");
        afterSuccess();
      } else if (afterSuccess) {
        console.error("afterSuccess must be a function");
      }
    } catch (error) {
      console.error("Error while fetching data ", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return {
    formData,
    isLoading,
    error,
    response,
    handleSubmit,
    handleInputChange,
  };
};

export default useFormSubmit;
