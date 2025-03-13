import axios from 'axios';

// create a custom axios instance
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  }
});

api.interceptors.request.use(request => {
  console.log("Starting request ", request);
  return request;
},
(config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
},
(error) => {
  console.error('Request Error', error);
  return Promise.reject(error);
});

api.interceptors.response.use(response => {
  console.log('Response ', response);
  // can add success check logic here
  return response;
},
(error) => {
  if (error.response && error.response.status === 401) {
    console.error('Unauthorized!');
  }
  if (error.response && error.response.status === 500) {
    console.error('Server Error!');
  }
  return Promise.reject(error);
}
);

export default api;
