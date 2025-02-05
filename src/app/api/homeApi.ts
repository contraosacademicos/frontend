import axios from 'axios';

const homeApi = axios.create({
  baseURL: 'https://api.example.com/home', // Substitua pela URL da sua API para Home
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

export default homeApi;