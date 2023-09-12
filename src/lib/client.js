import axios from 'axios';
import authHeader from './auth-header';

export const bashUrl = '';

// source: https://axios-http.com/docs/req_config
export function client(url, { method, data }) {
  return axios({
    method: method,
    url: `${bashUrl}${url}`,
    headers: authHeader(),
    data: data,
  })
    .then(function (response) {
      return {
        data: response.data,
        status: response.status,
      };
    })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status === 401) {
          return {
            status: error.response.status,
            error: error.response?.data?.message,
          };
        }
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error);
      return {
        error: error.response?.data?.message,
      };
    });
}
client.get = (url, data) => client(url, { method: 'GET', data: data });
client.delete = (url, data) => client(url, { method: 'DELETE', data: data });
client.post = (url, data) => client(url, { method: 'POST', data: data });
client.put = (url, data) => client(url, { method: 'PUT', data: data });
