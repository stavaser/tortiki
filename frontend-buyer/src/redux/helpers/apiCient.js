import axios from 'axios';

let token = localStorage.getItem('token');
console.log('HEADER');

const http = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  headers: {
    'Content-type': 'application/json',
    Authorization: token || null,
  },
});

export default http;
