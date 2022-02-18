import axios from 'axios';
import { setMessage } from '../slices/message';

const API_URL = 'http://127.0.0.1:8000/api';

const signup = (username, email, password) => {
  const user = new FormData();
  user.append('username', username);
  user.append('email', email);
  user.append('password', password);
  console.log('aq var');
  return axios
    .post(`${API_URL}/signup`, user)
    .then((res) => {
      if (res.data.status === 'error') {
        console.log('res.data.errors)', res.data.errors);
      } else if (res.data.status === 'success') {
        console.log(res.data.message);
      }
    })
    .catch((error) => {
      console.log('Request error', error);
    });
};

const login = (username, password, remember_me) => {
  const user = new FormData();
  user.append('username', username);
  user.append('password', password);
  user.append('remember_me', remember_me);

  axios
    .post(`${API_URL}/login`, user)
    .then((response) => {
      console.log(response);
      if (response.data.status === 'success') {
        console.log('response', response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      console.log('response', response.data);
      return response.data;
    })
    .catch((error) => {
      console.log('error', error);
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  login,
  logout,
  signup,
};

export default authService;
