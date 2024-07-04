import axios, { AxiosResponse } from "axios";

const service = axios.create({
  // baseURL: "http://35.77.26.72:8001/api",
  timeout: 50000,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default service;
