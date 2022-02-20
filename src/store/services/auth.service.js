import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

const signup = (username, email, password) => {
  const user = new FormData();
  user.append('username', username);
  user.append('email', email);
  user.append('password', password);
  return axios
    .post(`${API_URL}/signup`, user)
    .then((response) => {
      return response.data;
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

  return axios
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

const confirmationEmail = (email) => {
  const user = new FormData();
  user.append('email', email);

  return axios
    .post(`${API_URL}/reset-password-confirm`, user)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  login,
  logout,
  signup,
  confirmationEmail,
};

export default authService;
