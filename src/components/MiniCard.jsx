import React, { useEffect, useState } from "react";
import sun from "../assets/icons/sun.png";
import cloud from "../assets/icons/cloud.png";
import fog from "../assets/icons/fog.png";
import rain from "../assets/icons/rain.png";
import snow from "../assets/icons/snow.png";
import storm from "../assets/icons/storm.png";
import wind from "../assets/icons/windy.png";
import overcast from "../assets/icons/overcast.png";

const MiniCard = ({ time, temp, iconString }) => {
  // State untuk menyimpan ikon yang sesuai dengan kondisi cuaca
  const [icon, setIcon] = useState();

  // useEffect akan dipanggil ketika iconString berubah
  useEffect(() => {
    if (iconString) {
      // Logika untuk menentukan ikon cuaca berdasarkan string kondisi cuaca
      if (
        iconString.toLowerCase().includes("cloud") ||
        iconString.toLowerCase().includes("Partially cloudy")
      ) {
        setIcon(cloud);
      } else if (iconString.toLowerCase().includes("rain")) {
        setIcon(rain);
      } else if (iconString.toLowerCase().includes("overcast")) {
        setIcon(overcast);
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
    <div className="glassCard w-[10rem] h-[10rem] p-4 flex flex-col">
      {/* Menampilkan hari dari waktu yang diberikan */}
      <p className="text-center">
        {
          new Date(time)
            .toLocaleTimeString("en", { weekday: "long" })
            .split(" ")[0]
        }
      </p>

      <hr />

      {/* Menampilkan ikon cuaca */}
      <div className="w-full flex justify-center items-center flex-1">
        <img
          src={icon}
          alt="icon forecast not available"
          className="w-16 h-w-16 flex-shrink-0"
        />
      </div>

      {/* Menampilkan suhu dalam derajat Celsius */}
      <p className="text-center font-bold">{temp}&deg;C</p>
    </div>
  );
};

export default MiniCard;
