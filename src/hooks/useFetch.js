import { useEffect, useState } from "react";

export const useFetch = (api) => {
  const [popular, setPopular] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPopular = async () => {
      try {
        const check = localStorage.getItem("popular");

        if (check) {
          setPopular(JSON.parse(check));
        } else {
          const response = await fetch(api);

          if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
          }

          const data = await response.json();
          localStorage.setItem("popular", JSON.stringify(data.recipes));
          setPopular(data.recipes);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    getPopular();

  }, [api]);

  return { popular, error };
};
