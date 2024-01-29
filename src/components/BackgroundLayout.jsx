import React, { useEffect, useState } from "react";
import { useStateContext } from "../context";
import Clear from "../assets/images/Sunny.png";
import Fog from "../assets/images/Foggy.png";
import Cloudy from "../assets/images/Cloudy.png";
import Rainy from "../assets/images/Rainy.png";
import Snow from "../assets/images/Snow.png";
import Stormy from "../assets/images/Stormy.jpg";

const BackgroundLayout = () => {
  // Gunakan context untuk mendapatkan data cuaca
  const { weather } = useStateContext();

  // State untuk menyimpan gambar latar belakang yang sesuai dengan kondisi cuaca
  const [image, setImage] = useState(Clear);

  // useEffect akan dipanggil ketika weather berubah
  useEffect(() => {
    // Logika untuk menentukan gambar latar belakang berdasarkan kondisi cuaca
    if (weather.conditions) {
      let imageString = weather.conditions;

      if (imageString.toLowerCase().includes("clear")) {
        setImage(Clear);
      } else if (imageString.toLowerCase().includes("cloud")) {
        setImage(Cloudy);
      } else if (
        imageString.toLowerCase().includes("rain") ||
        imageString.toLowerCase().includes("shower")
      ) {
        setImage(Rainy);
      } else if (imageString.toLowerCase().includes("snow")) {
        setImage(Snow);
      } else if (imageString.toLowerCase().includes("fog")) {
        setImage(Fog);
      } else if (
        imageString.toLowerCase().includes("thunder") ||
        imageString.toLowerCase().includes("storm")
      ) {
        setImage(Stormy);
      }
    }
  }, [weather]);

  // console.log(weather)

  return (
    <img
      src={image}
      alt="weatherImage"
      className="h-screen w-full fixed left-0 top-0 -z-[10]"
    />
  );
};

export default BackgroundLayout;
