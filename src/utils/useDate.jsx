import { useEffect } from "react";
import { useState } from "react";

// Hook kustom untuk mendapatkan tanggal dan waktu
export const useDate = () => {
  // Pengaturan bahasa untuk tanggal dan waktu
  const locale = "en";

  // State untuk menyimpan tanggal dan waktu saat ini
  const [today, setDate] = useState(new Date());

  // useEffect untuk memperbarui tanggal setiap menit
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60 * 1000);

    // Membersihkan timer saat komponen tidak lagi digunakan
    return () => {
      clearInterval(timer);
    };
  }, []);

  // Mendapatkan waktu hari dalam seminggu
  const day = today.toLocaleDateString(locale, { weekday: "long" });

  // Format tanggal dalam bentuk teks
  const date = `${day}, ${today.getDate()}, ${today.toLocaleDateString(locale, {
    month: "long",
  })}\n\n`;

  // Format waktu dalam bentuk teks
  const time = today.toLocaleDateString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });

  // Mengembalikan objek berisi tanggal dan waktu
  return {
    date,
    time,
  };
};
