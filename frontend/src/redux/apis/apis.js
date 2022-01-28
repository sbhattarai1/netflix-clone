import axios from "axios";

const instance = axios.create({
  baseURL: "https://backened-netflix-clone-sangita.herokuapp.com/",
  // baseURL: "https://netback.herokuapp.com"
});

export default instance;
