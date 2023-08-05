import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const responseBody = (response: AxiosResponse<UserData>) => response;

const requests = {
  get: (url: string, token: string) =>
    instance.get(url, configCreator(token)).then(responseBody),
  post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
  put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

const configCreator = (token: string) => {
  const extendedConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return extendedConfig;
};

export type UserData = {
  userData?: string;
  timestamp?: string;
};

export type AdminData = {
  userData?: string;
  timestamp?: string;
};

const apiService = {
  getDataUser: (token: string): Promise<AxiosResponse<UserData>> =>
    requests.get("/v2-Dev/TestData/TestData", token),

  getDataAdmin: (token: string): Promise<AxiosResponse<AdminData>> =>
    requests.get("/v2-Dev/TestData/AdminData", token),
};

export { apiService };
