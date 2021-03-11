import axios from 'axios';

export const BASE_URL = 'https://wondertax.du.r.appspot.com';

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
