import axios from "axios";

const API_KEY = "35fd3412de0583993dfea02c169c1472";

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;
