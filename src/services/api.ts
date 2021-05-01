import axios from 'axios';

const year = new Date().getFullYear()

const api = axios.create({
  baseURL: `http://calapi.inadiutorium.cz/api/v0/en/calendars/default/${year}`,
});

export default api;
