import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

// Membuat context untuk menyimpan state global
const StateContext = createContext();

// Komponen Provider untuk StateContext
export const StateContextProvider = ({ children }) => {
  // State untuk menyimpan data cuaca
  const [weather, setWeather] = useState({});

  // State untuk menyimpan nilai cuaca per jam
  const [values, setValues] = useState([]);

  // State untuk menyimpan nama tempat
  const [place, setPlace] = useState("Lumajang");

  // State untuk menyimpan alamat lokasi
  const [location, setLocation] = useState("");

  // State untuk menyimpan daftar kota yang disimpan
  const [savedCities, setSavedCities] = useState([]);

  // Fungsi untuk mengambil data cuaca dari API
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
      // Mengambil data dari API menggunakan axios
      const response = await axios.request(options);
      console.log(response.data);

      // Menyimpan data cuaca ke dalam state
      const thisData = Object.values(response.data.locations)[0];
      setLocation(thisData.address);
      setValues(thisData.values);
      setWeather(thisData.values[0]);
    } catch (e) {
      console.error(e);
      // Menampilkan pesan alert jika terjadi error dari API
      alert("This place does not exist");
    }
  };

  // useEffect untuk memanggil fetchWeather ketika nilai place berubah
  useEffect(() => {
    fetchWeather();
  }, [place]);

  // useEffect untuk menampilkan nilai values ke dalam console ketika berubah
  useEffect(() => {
    console.log(values);
  }, [values]);

  // useEffect untuk mengambil savedCities dari localStorage saat komponen dimount
  useEffect(() => {
    const storedCities = JSON.parse(localStorage.getItem("savedCities")) || [];
    setSavedCities(storedCities);
  }, []);

  // useEffect untuk menyimpan savedCities ke dalam localStorage setiap kali berubah
  useEffect(() => {
    localStorage.setItem("savedCities", JSON.stringify(savedCities));
  }, [savedCities]);

  // Memberikan nilai ke StateContext.Provider
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

// Custom hook untuk menggunakan StateContext
export const useStateContext = () => useContext(StateContext);
