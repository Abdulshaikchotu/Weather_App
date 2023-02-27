import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
function App() {
  let [City, setCity] = useState("");
  let [state1, setstate1] = useState("");
  let [state2, setstate2] = useState("");
  let [state3, setstate3] = useState("");
  let [state4, setstate4] = useState("");
  let [state5, setstate5] = useState("");
  let [state6, setstate6] = useState("");

  useEffect(() => {
    Axios.get(
      `http://api.weatherapi.com/v1/current.json?key=8625d9854f5f42b09a6122453232702&q=${City}&aqi=yes`
    ).then((data) => {
      window.localStorage.setItem("city", JSON.stringify(data));
      let city = data.data.location.name;
      let currenttemp = data.data.current.temp_c;
      let maxtemp = data.data.current.temp_f;
      let lat = data.data.location.lat;
      let long = data.data.location.lon;
      let humidity = data.data.current.humidity;
      setstate1(city);
      setstate2(currenttemp);
      setstate3(maxtemp);
      setstate4(humidity);
      setstate5(lat);
      setstate6(long);
    });
  }, [City]);
  // setarr(setCity);

  return (
    <div className="App">
      <h1 style={{ color: "blue" }}>Weather APP</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={City}
        onChange={(e) => setCity(e.target.value)}
      />
      {City ? (
        <div>
          <p>
            <strong>Weather Details OF City :</strong>
            {state1}
          </p>
          <p>
            <strong>Current Temperature :</strong>
            {state2}'C
          </p>
          <p>
            {" "}
            <strong>Temperature Range :</strong>
            {state3}'F
          </p>
          <p>
            {" "}
            <strong>Humidity:</strong>
            {state4}
          </p>
          <p>
            {" "}
            <strong>Latitude:</strong>
            {state5}
          </p>
          <p>
            {" "}
            <strong>Longitude :</strong>
            {state6}
          </p>
        </div>
      ) : (
        <h1 style={{ color: "red" }}>Enter Valid City Name</h1>
      )}
    </div>
  );
}

export default App;
