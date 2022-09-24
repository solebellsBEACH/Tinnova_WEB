import axios from "axios";
// import { getToken } from "../hooks";

export const baseURL = 'https://private-9d65b3-tinnova.apiary-mock.com/'

export const api = axios.create({
  baseURL: baseURL,
  // headers: {
  //   'Authorization': "Bearer "+getToken(),
  // },
});
