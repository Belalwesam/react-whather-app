import { useState, useEffect, createContext } from "react";
import axios from "axios";
export const WheatherContext = createContext();
const WheatherContextProvider = (props) => {
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const api = {
    apiKey: "c3701964d118b3d65e2ccd5d0f70bca4",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
  };
  const initInfo = () => {
    setLoading(true);
    axios({
      method: "GET",
      url: `${api.baseUrl}?q=${"amman"}&units=metric&appid=${api.apiKey}`,
    })
      .then((res) => {
        setInfo(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  const search = (query) => {
    axios({
      method: "GET",
      url: `${api.baseUrl}?q=${query}&units=metric&appid=${api.apiKey}`,
    })
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    initInfo();
  }, []);
  let value = {
    info: info,
    loading: loading,
    search,
  };
  return (
    <WheatherContext.Provider value={value}>
      {props.children}
    </WheatherContext.Provider>
  );
};
export default WheatherContextProvider;
