import axios from 'axios';
import { API_URL } from './env';

export const apiTiendita = axios.create({
    baseURL: API_URL
});