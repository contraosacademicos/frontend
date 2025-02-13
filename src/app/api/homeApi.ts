import axios from 'axios';

const homeApi = axios.create({
  baseURL: 'https://development.contraosacademicos.com.br/api',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

export const fetchHomeData = async () => {
  const response = await homeApi.get('/home');
  console.log(response.data);
  return response.data;
};

export default homeApi;