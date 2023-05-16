import { getBaseUrl } from "../utils/index";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: getBaseUrl(),
});
