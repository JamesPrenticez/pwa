import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { mockUsers } from "@mocks";

const useMockData = true; //import.meta.env.VITE_ENV === "development" ? true : false;
const log = false;
const env = import.meta.env.VITE_ENV;
console.log(env);

export const axiosInstance = axios.create({
  baseURL:
    env === "development"
      ? "http://localhost:5000/api/"
      : "https://selfregulator.azurewebsites.net/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true, // this enables us to send a HTTPOnly cookie automagically for JWT authentication
});

if (useMockData) {
  const mockAxiosInstance = new MockAdapter(axiosInstance, {
    delayResponse: 1000,
  });

  //============================================
  // GET
  //============================================
  // User Details
  mockAxiosInstance.onGet("user").reply((config) => {
    if (log)
      console.table({
        method: config.method,
        endpoint: config.url,
        params: config.params,
      });
    return [200, { data: mockUsers[0] }];
  });

  //============================================
  // POST
  //============================================
  mockAxiosInstance.onPost("/user").reply((config) => {
    console.log("mock POST request made!");
    return [200, { message: "success" }];
  });

  //============================================
  // PUT
  //============================================
  mockAxiosInstance.onPut("/user").reply((config) => {
    console.log("mock PUT request made!");
    return [200, { message: "success" }];
  });
}
