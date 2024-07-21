import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "9e1b4c151593f8bc490c971126f9d44c",
    language: "pt-BR",
    page: 1,
  },
});

export default api;
