import axios from "axios";

const axioInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getPost = () => {
  return axioInstance.get('/posts');
}