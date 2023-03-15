import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d9fd79c681f248dea832b0ba8b2a22ab",
  },
});
