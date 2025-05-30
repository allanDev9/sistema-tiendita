import axios from "axios";
import { API_URL } from "../shared/env/env";

export const apiTiendita = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});
