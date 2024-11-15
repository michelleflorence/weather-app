import { useState } from "react";
import "./App.css";
import search from "./assets/icons/search.png";
import { useStateContext } from "./context";
import { BackgroundLayout, MiniCard, WeatherCard } from "./components";
import { Link } from "react-router-dom";

function Home() {
  // Gunakan hook useState untuk mengelola state input
  const [input, setInput] = useState("");

  // Destruktur nilai dari state global menggunakan useStateContext
  const { weather, location, values, setPlace, savedCities, setSavedCities } =
    useStateContext();

  // Fungsi untuk menyimpan kota saat ini ke daftar kota yang disimpan
  const saveCity = () => {
    // Periksa apakah lokasi saat ini belum ada dalam daftar
    if (!savedCities.includes(location)) {
      setSavedCities([...savedCities, location]);
    }
  };

  // Fungsi untuk menangani pengiriman kota saat tombol Enter ditekan
  const submitCity = () => {
    // Tetapkan input saat ini sebagai lokasi baru
    setPlace(input);

    // Bersihkan isian input
    setInput("");
  };

  // console.log(weather);

  return (
    <div className="home-container w-full h-screen text-white px-20">
      <nav className="nav-container w-full p-5 flex justify-between items-center">
        <h1
          className="weather-app-text mt-5 font-bold tracking-wide text-xl"
          style={{ width: "100%" }}
        >
          WEATHER-APP
        </h1>
        <div className="search-bar mt-5 bg-white w-96 h-47 overflow-hidden shadow-2xl rounded-full flex items-center p-2 gap-2">
          <img
            src={search}
            alt="search"
            className="ml-2 w-[1.5rem] h-[1.5rem]"
          />
          <input
            onKeyUp={(e) => {
              // Periksa apakah tombol Enter ditekan
              if (e.key === "Enter") {
                // Jika ya, submit form
                submitCity();
              }
            }}
            type="text"
            placeholder="Search City"
            className="focus:outline-none w-full text-[#212121] text-md"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </nav>

      <BackgroundLayout />

      <main className="main-content w-full flex flex-wrap gap-8 py-10 px-[10%] items-center justify-center">
        <WeatherCard
          place={location}
          temperature={weather.temp}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />

        <div className="mini-card-container flex justify-center gap-8 flex-wrap w-full md:flex-row">
          {values?.slice(1, 6).map((curr) => {
            return (
              <MiniCard
                key={curr.datetime}
                time={curr.datetime}
                temp={curr.temp}
                iconString={curr.conditions}
              />
            );
          })}
        </div>

        <div className="mt-1 mx-auto">
          <Link to="/savedcities">
            <button
              onClick={saveCity}
              className="bg-blue-700 rounded-xl hover:bg-blue-800 text-white px-8 py-2"
            >
              Saved City
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;
