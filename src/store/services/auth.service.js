import axios from 'axios';

const signup = async (username, email, password) => {
  const user = new FormData();
  user.append('username', username);
  user.append('email', email);
  user.append('password', password);

  return await axios
    .get(`${process.env.REACT_APP_API_URL}/sanctum/csrf-cookie`, {
      withCredentials: true,
    })
    .then(async () => {
      return await axios
        .post(`${process.env.REACT_APP_API_URL}/api/signup`, user, {
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
    .get(`${process.env.REACT_APP_API_URL}/sanctum/csrf-cookie`, {
      withCredentials: true,
    })
    .then(async () => {
      return await axios
        .post(`${process.env.REACT_APP_API_URL}/api/login`, user, {
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
    .get(`${process.env.REACT_APP_API_URL}/sanctum/csrf-cookie`, {
      withCredentials: true,
    })
    .then(async () => {
      return await axios
        .post(
          `${process.env.REACT_APP_API_URL}/api/reset-password-confirm`,
          user,
          {
            withCredentials: true,
          }
        )
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
    .get(`${process.env.REACT_APP_API_URL}/sanctum/csrf-cookie`, {
      withCredentials: true,
    })
    .then(async () => {
      return await axios
        .post(`${process.env.REACT_APP_API_URL}/api/reset-password`, user, {
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
