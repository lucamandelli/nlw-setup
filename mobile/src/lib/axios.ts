import axios from "axios";

export const api = axios.create({
  baseURL: 'http://172.28.193.230:3333'
});