import axios from "axios";

// Crear una instancia con interceptor que agregue el token
const api = axios.create({
  baseURL: "http://localhost:8000/",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
