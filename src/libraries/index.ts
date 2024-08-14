import axios from "axios";

export const API = axios.create({
  baseURL: "https://express-prisma-food.onrender.com/api/v1",
});
