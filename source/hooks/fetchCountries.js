import { useState, useEffect } from "react";
import axios from "axios";

const fetchCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        "http://192.168.3.28:5001/country/getCountries"
      );
      setCountries(response.data.countries);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return { countries, isLoading, error, refetch };
};

export default fetchCountries;
