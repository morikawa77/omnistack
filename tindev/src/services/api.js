import axios from 'axios';

const api = axios.create({
    baseURL: 'http://Morcegao.local:3333'
});

export default api;