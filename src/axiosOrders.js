import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://souvlaki-builder.firebaseio.com/'
});

export default instance;
