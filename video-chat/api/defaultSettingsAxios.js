import axios from "axios";
import { LIVEDIGITAL_API_URL, PROXY_URL } from "./urls/urls";
import { ACCESS_TOKEN, ACCESS_TOKEN_2, TOKEN, REFRESH_TOKEN_2 } from "./token";

const liveDigitalApi = axios.create()
liveDigitalApi.defaults.baseURL = PROXY_URL+LIVEDIGITAL_API_URL
liveDigitalApi.defaults.headers.common = {
    'Authorization': `Bearer ${ACCESS_TOKEN_2}`,
    'Content-Type': 'application/json'
  }

export default liveDigitalApi


