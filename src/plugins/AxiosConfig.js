import axios from "axios";

let token = "";

export const service = axios.create({
  baseURL: "https://sandbox.crickpro.com/api/",
});

service.interceptors.request.use(async (config) => {
  config.headers.Authorization = "Bearer " + token;

  return config;
});
