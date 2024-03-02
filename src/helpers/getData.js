import axios from "axios";

// istek için gerekli ayarlar
const options = {
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
  params: {
    lang: "tr",
    geo: "TR",
  },
};

// yapılan bütün isteklerin ortak olan başlanguc kısmını belirle
axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

// Parametre olarak aldığı url'e istek atıp
// Geriye elde ettiği verileri döndüren
export const getData = async (endpoint) => {
  try {
    // api isteği at
    const res = await axios.get(endpoint, options);

    // fonksiyonun çağrıldığı yere  veriyi döndür
    return res.data;
  } catch (err) {
    console.log("Verileri çekerken bir sorun oluştu", err);
  }
};
