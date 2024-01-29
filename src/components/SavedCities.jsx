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
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          className="backdrop-blur-sm first-letter:relative px-4 py-10 bg-white/30 shadow-lg sm:rounded-3xl sm:p-20 border border-gray-200"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <h2 className="text-xl font-semibold mb-8 text-center">
            Saved Cities
          </h2>

          {/* Menampilkan daftar kota yang disimpan */}
          <ul className="list-disc space-y-2">
            <li className="flex items-start">
              <div className="flex flex-col items-center justify-center text-center">
                {/* Mapping untuk setiap kota */}
                {cities.map((city, index) => (
                  <div
                    key={index}
                    className="px-6 py-2 rounded-md shadow-md mb-4 w-full max-h-48 overflow-hidden backdrop-blur-sm bg-white/30"
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
                <button className="bg-sky-700 rounded-lg hover:bg-sky-800 text-white px-8 py-2">
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
