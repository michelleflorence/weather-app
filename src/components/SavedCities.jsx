import React from "react";
import { Link } from "react-router-dom";

const SavedCities = ({ cities }) => {
  return (
    // Background Image
    <div
      className="w-full h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1493130952181-47e36589f64d?q=80&w=1554&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex py-3 items-center justify-center text-center sm:max-w-xl sm:mx-auto">
        <div
          className="backdrop-blur-sm first-letter:relative bg-white/30 shadow-lg px-4 py-10 rounded-3xl sm:p-20 border border-gray-200"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Saved Cities</h2>

          {/* Menampilkan daftar kota yang disimpan */}
          <ul className="list-disc space-y-2">
            <li className="flex items-start">
              <div className="flex flex-col items-center justify-center text-center">
                {/* Mapping untuk setiap kota */}
                {cities.map((city, index) => (
                  <div
                    key={index}
                    className="w-full max-w-md max-h-48 px-6 py-1 rounded-full shadow-md mb-4 overflow-hidden backdrop-blur-sm bg-white/30"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <h3 className="text-lg font-semibold mb-2">{city}</h3>
                  </div>
                ))}
              </div>
            </li>

            {/* Tombol kembali ke halaman utama */}
            <div className="text-center">
              <Link to="/">
                <button className="bg-sky-700 rounded-xl hover:bg-sky-800 text-white px-8 py-2">
                  Back
                </button>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SavedCities;
