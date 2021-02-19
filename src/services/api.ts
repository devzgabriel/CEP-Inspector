import axios from "axios";

const api = axios.create({
  baseURL: "https://backend/", //fix it after create backend
});

export default api;
