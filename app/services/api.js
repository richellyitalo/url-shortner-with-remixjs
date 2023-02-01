import axios from "axios";
import getEnv from "~/utils/get-env";

const apiUrl = getEnv().API_URL;
const api = axios.create({
  baseURL: apiUrl,
});

export default api;