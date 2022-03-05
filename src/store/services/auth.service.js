import axios from 'axios';

const API_URL = 'https://coronatime-api.tazo.redberryinternship.ge/api';

const signup = async (username, email, password) => {
  const user = new FormData();
  user.append('username', username);
  user.append('email', email);
  user.append('password', password);

  return await axios
    .get(
      'https://coronatime-api.tazo.redberryinternship.ge/sanctum/csrf-cookie',
      {
        withCredentials: true,
      }
    )
    .then(async () => {
      return await axios
        .post(`${API_URL}/signup`, user, {
          withCredentials: true,
        })
        .then(async (response) => {
          return await response.data;
        });
    });
};

const login = async (username, password, remember_me) => {
  const user = new FormData();
  user.append('username', username);
  user.append('password', password);
  user.append('remember_me', remember_me);

  return await axios
    .get(
      'https://coronatime-api.tazo.redberryinternship.ge/sanctum/csrf-cookie',
      {
        withCredentials: true,
      }
    )
    .then(async () => {
      return await axios
        .post(`${API_URL}/login`, user, {
          withCredentials: true,
        })
        .then(async (response) => {
          return await response.data;
        });
    });
};

const confirmationEmail = async (email) => {
  const user = new FormData();
  user.append('email', email);

  return await axios
    .get(
      'https://coronatime-api.tazo.redberryinternship.ge/sanctum/csrf-cookie',
      {
        withCredentials: true,
      }
    )
    .then(async () => {
      return await axios
        .post(`${API_URL}/reset-password-confirm`, user, {
          withCredentials: true,
        })
        .then(async (response) => {
          return await response.data;
        });
    });
};

const resetPassword = async (token, password) => {
  const user = new FormData();
  user.append('password', password);
  user.append('token', token);

  return await axios
    .get(
      'https://coronatime-api.tazo.redberryinternship.ge/sanctum/csrf-cookie',
      {
        withCredentials: true,
      }
    )
    .then(async () => {
      return await axios
        .post(`${API_URL}/reset-password`, user, {
          withCredentials: true,
        })
        .then(async (response) => {
          return await response.data;
        });
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
  resetPassword,
};

export default authService;
