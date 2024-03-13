import { useState, useEffect } from "react";
import axios from "axios";

const fetchLogin = async (email, password) => {
  const [accessToken, setAccessToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const login = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://192.168.3.28:5001/auth/",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 5000,
        }
      );

      if (response.status === 200) {
        setAccessToken(response.data.accessToken);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

//   useEffect(() => {
//     login();
//   }, []);

  const refetch = () => {
    login();
  };

  return { accessToken, isLoading, error, refetch };
};

export default fetchLogin;
