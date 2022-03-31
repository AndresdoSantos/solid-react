import { useEffect, useState } from 'react';

export const useFetch = (URL: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return data;
};
