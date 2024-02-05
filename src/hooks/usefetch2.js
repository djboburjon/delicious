import { useEffect, useState } from "react";

export const useFetch = (api) => {
  const [veggie, setVeggie] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVeggie = async () => {
      try {
        const check = localStorage.getItem("veggie");

        if (check) {
          setVeggie(JSON.parse(check));
        } else {
          const response = await fetch(api);

          if (!response.ok) {
            throw new Error(`Failed to fetch veggie data: ${response.statusText}`);
          }

          const data = await response.json();
          localStorage.setItem("veggie", JSON.stringify(data.recipes));
          setVeggie(data.recipes);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchVeggie();

  }, [api]);

  return { veggie, error };
};
