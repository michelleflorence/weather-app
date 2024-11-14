import React, { useEffect, useState } from "react";
import { useDate } from "../utils/useDate";
import sun from "../assets/icons/sun.png";
import cloud from "../assets/icons/cloud.png";
import fog from "../assets/icons/fog.png";
import rain from "../assets/icons/rain.png";
import snow from "../assets/icons/snow.png";
import storm from "../assets/icons/storm.png";
import wind from "../assets/icons/windy.png";
import "../index.css";

const WeatherCard = ({ temperature, place, iconString, conditions }) => {
  // State untuk menyimpan ikon cuaca berdasarkan kondisi
  const [icon, setIcon] = useState(sun);

  // Menggunakan custom hook useDate untuk mendapatkan waktu saat ini
  const { time } = useDate();

  // useEffect untuk memperbarui ikon berdasarkan kondisi cuaca
  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes("cloud")) {
        setIcon(cloud);
      } else if (iconString.toLowerCase().includes("rain")) {
        setIcon(rain);
      } else if (iconString.toLowerCase().includes("clear")) {
        setIcon(sun);
      } else if (iconString.toLowerCase().includes("thunder")) {
        setIcon(storm);
      } else if (iconString.toLowerCase().includes("fog")) {
        setIcon(fog);
      } else if (iconString.toLowerCase().includes("snow")) {
        setIcon(snow);
      } else if (iconString.toLowerCase().includes("wind")) {
        setIcon(wind);
      }
    }
  }, [iconString]);

  return (
    <div className="glass-card-weather-card w-[25rem] h-[22rem] p-4">
      {/* Bagian untuk menampilkan ikon dan suhu */}
      <div className="weather-card-icon flex w-full justify-center items-center gap-4 mt-12 mb-4">
        <img
          src={icon}
          alt="weatherIcon"
          className="w-16 h-w-16 flex-shrink-0"
        />
        <p className="weather-card-temperature font-bold text-5xl flex justify-center items-center">
          {temperature} &deg;C
        </p>
      </div>

      {/* Menampilkan nama tempat */}
      <div className="weather-card-place font-bold text-center text-xl">
        {place}
      </div>

      {/* Menampilkan tanggal dan waktu */}
      <div className="weather-card-time-container w-full flex justify-between items-center mt-4">
        <p className="weather-card-date flex-1 text-center p-2">
          {new Date().toDateString()}
        </p>
        <p className="weather-card-time flex-1 text-center p-2">{time}</p>
      </div>

      <hr className="bg-slate-600" />

      {/* Menampilkan kondisi cuaca */}
      <div className="weather-card-condition w-full p-4 flex justify-center items-center text-3xl font-semibold">
        {conditions}
      </div>
    </div>
  );
};

export default WeatherCard;
