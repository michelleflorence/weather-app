import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [values, setValues] = useState([]);
  const [place, setPlace] = useState("Lumajang");
  const [location, setLocation] = useState("");
  const [savedCities, setSavedCities] = useState([]);

  // fetch api
  const fetchWeather = async () => {
    const options = {
      method: "GET",
      url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
      params: {
        aggregateHours: "24",
        location: place,
        contentType: "json",
        unitGroup: "metric",
        shortColumnNames: 0,
      },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      const thisData = Object.values(response.data.locations)[0];
      setLocation(thisData.address);
      setValues(thisData.values);
      setWeather(thisData.values[0]);
    } catch (e) {
      console.error(e);
      // if the api throws error.
      alert("This place does not exist");
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [place]);

  useEffect(() => {
    console.log(values);
  }, [values]);

  useEffect(() => {
    // Retrieve savedCities from localStorage on component mount
    const storedCities = JSON.parse(localStorage.getItem("savedCities")) || [];
    setSavedCities(storedCities);
  }, []);

  useEffect(() => {
    // Save to localStorage whenever savedCities changes
    localStorage.setItem("savedCities", JSON.stringify(savedCities));
  }, [savedCities]);

  return (
    <StateContext.Provider
      value={{
        weather,
        setPlace,
        values,
        location,
        place,
        savedCities,
        setSavedCities,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
