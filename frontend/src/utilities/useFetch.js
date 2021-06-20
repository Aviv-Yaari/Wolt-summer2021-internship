import { useEffect, useState } from "react";
const useFetch = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:9000/discovery?lat=60.171&lon=24.94")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return data;
};

export default useFetch;
