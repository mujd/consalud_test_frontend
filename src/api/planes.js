import axios from 'axios';

const clientPlansAxios = axios.create({
   baseURL: 'http://localhost:8080/api',
   headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
   },
});

export default clientPlansAxios;
