import axios from "axios";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
export const ApiUrlConfig = axios.create({
  baseURL: `https://namebranch-66f26-default-rtdb.firebaseio.com`,
});
