import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.34.124.239:3001",
});

export default instance;
