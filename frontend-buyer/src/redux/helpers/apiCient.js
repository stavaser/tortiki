import axios from 'axios';

let token = localStorage.getItem('token');
console.log('HEADER', token);

const http = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  headers: {
    Authorization: token || null,
    'Content-type': 'application/json',
  },
});

export default http;
