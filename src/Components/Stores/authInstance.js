import axios from 'axios';

const authInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/"
  });
export default authInstance;