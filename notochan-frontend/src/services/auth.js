import axios from "axios";

// Use environment variable
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Register user
export const registerUser = async (userData) => {
  const { data } = await API.post("/register", userData);
  return data;
};

// Login user
export const loginUser = async (userData) => {
  const { data } = await API.post("/login", userData);
  return data;
};
