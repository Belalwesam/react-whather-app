import { useContext, useEffect, useState } from "react";
import { WheatherContext } from "../context/WheatherContext";
const Result = () => {
  const { info } = useContext(WheatherContext);
  console.log(info)
  const getDate = () => {
    let date = new Date();
    let year, month, dayofDate;
    year = date.getFullYear();
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "Descember",
    ];
    month = months[date.getMonth()];
    dayofDate = date.getDate();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednseday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
    return `${day} ${dayofDate} ${month} ${year}`;
  };
  return (
    <>
      <div className="result">
        <div className="city-info text-center text-white my-5">
          <h2
            style={{
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontWeight: "light",
            }}
          >
            {info.name} , {info.sys.country}
          </h2>
          <h6 className="font-italic">{getDate()}</h6>
        </div>
        <div className="temp-box text-center">
          <h1>{Math.ceil(info.main.temp)}°c</h1>
          <p className="temp-status">{info.weather[0].main}</p>
        </div>
      </div>
    </>
  );
};
export default Result;
