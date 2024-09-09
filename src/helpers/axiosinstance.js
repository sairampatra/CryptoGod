import axios from "axios";
import { COINGECKO_API_URL } from "./constants";
const axiosinstance = axios.create({
  baseURL: COINGECKO_API_URL,
});
export default axiosinstance;
     