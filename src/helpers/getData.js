import axios from "axios";

// istek için gerekli ayarlar
const options = {
  headers: {
    "X-RapidAPI-Key": "18600bbc6fmsh0351fead3b2aab5p1acde8jsnbba0f4f55db1",
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
