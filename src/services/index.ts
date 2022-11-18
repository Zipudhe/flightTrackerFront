import axios from 'axios';

const flightApi = axios.create({
  baseURL: 'http://localhost:8000',
});

export default flightApi;
