import { useEffect, useState } from "react";
import "./App.css";
import search from "./assets/icons/search.png";
import { useStateContext } from "./context";
import { BackgroundLayout, MiniCard, WeatherCard } from "./components";
import { Link } from "react-router-dom";

function Home() {
  const [input, setInput] = useState("");
  const { weather, location, values, setPlace, savedCities, setSavedCities } =
    useStateContext();

  const saveCity = () => {
    // Jangan simpan kota yang sudah ada di daftar
    if (!savedCities.includes(location)) {
      setSavedCities([...savedCities, location]);
    }
  };
  // console.log(weather);

  const submitCity = () => {
    setPlace(input);
    setInput("");
  };

  return (
    <div className="w-full h-screen text-white px-8">
      <nav className="w-full p-3 flex justify-between items-center">
        <h1 className="mt-5 font-bold tracking-wide text-2xl">
          Weather Application
        </h1>
        <div className="mt-5 bg-white w-96 h-47 overflow-hidden shadow-2xl rounded-full flex items-center p-2 gap-2">
          <img
            src={search}
            alt="search"
            className="ml-2 w-[1.5rem] h-[1.5rem]"
          />
          <input
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                // submit the form
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

      <main className="w-full flex flex-wrap gap-8 py-10 px-[10%] items-center justify-center">
        <WeatherCard
          place={location}
          temperature={weather.temp}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />

        <div className="flex justify-center gap-8 flex-wrap w-full md:flex-row">
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
              className="bg-blue-700 rounded-lg hover:bg-blue-800 text-white px-8 py-2"
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
