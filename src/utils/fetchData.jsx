import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [countries, setCountries] = useState([]);

  const getData = async () => {
    const data = await fetch(url);
    const items = await data.json();
    setCountries(items);
  };
  useEffect(() => {
    getData();
  }, [url]);
  return { countries };
};

export default useFetch;
