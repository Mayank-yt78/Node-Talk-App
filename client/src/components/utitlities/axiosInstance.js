import axios from "axios";

// ✅ Use your deployed backend URL (fallback to localhost for dev)
const DB_URL = import.meta.env.VITE_DB_URL || "https://your-backend-url.onrender.com/api/v1";

export const axiosInstance = axios.create({
  baseURL: DB_URL,
  withCredentials: true, // ✅ Important for cookies-based sessions
  headers: {
    // ❌ "ContentType" is incorrect — should be:
    "Content-Type": "application/json",
  },
});

// ✅ Optional: If you're using token-based auth (uncomment if needed)
/*
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
*/
