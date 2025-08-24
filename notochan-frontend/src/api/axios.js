import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // backend URL
  withCredentials: true, // if you use cookies/sessions
});

export default API;

