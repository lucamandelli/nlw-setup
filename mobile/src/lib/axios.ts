import axios from "axios";

export const api = axios.create({
  baseURL: 'http://172.26.247.250:3333'
})