import axios from "axios";

const api = axios.create({
  baseURL: "https://www.omdbapi.com/?s=man&apikey=4a3b711b",
});

export default api;
