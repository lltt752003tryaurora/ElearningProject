import axios from "axios";

const URL_DOMAIN = "https://elearningnew.cybersoft.edu.vn";
const TokenCybersoft =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlSlMgMzciLCJIZXRIYW5TdHJpbmciOiIyNi8wNS8yMDI0IiwiSGV0SGFuVGltZSI6IjE3MTY2ODE2MDAwMDAiLCJuYmYiOjE2OTg1MTI0MDAsImV4cCI6MTcxNjgyOTIwMH0.WRdYDUhhNdFlNs99AP2dpjnCOrvxtAV4BH7IvNMVa_Y";

const userData = JSON.parse(localStorage.getItem("user"));

const https = axios.create({
  baseURL: URL_DOMAIN,
  headers: {
    TokenCybersoft,
    Authorization: `Bearer ${userData?.accessToken}`,
  },
});

https.interceptors.request.use(
  function (config) {
    return {
      ...config,
    };
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

https.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default https;
