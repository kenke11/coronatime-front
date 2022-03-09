import axios from 'axios';

const signup = async (username, email, password) => {
  const user = new FormData();
  user.append('username', username);
  user.append('email', email);
  user.append('password', password);

  await axios.get(`${process.env.REACT_APP_API_URL}/sanctum/csrf-cookie`, {
    withCredentials: true,
  });
  let res = await axios.post(
    `${process.env.REACT_APP_API_URL}/api/signup`,
    user,
    {
      withCredentials: true,
    }
  );

  return await res.data;
};

const login = async (username, password, remember_me) => {
  const user = new FormData();
  user.append('username', username);
  user.append('password', password);
  user.append('remember_me', remember_me);

  await axios.get(`${process.env.REACT_APP_API_URL}/sanctum/csrf-cookie`, {
    withCredentials: true,
  });

  let res = await axios.post(
    `${process.env.REACT_APP_API_URL}/api/login`,
    user,
    {
      withCredentials: true,
    }
  );

  return await res.data;
};

const confirmationEmail = async (email) => {
  const user = new FormData();
  user.append('email', email);

  await axios.get(`${process.env.REACT_APP_API_URL}/sanctum/csrf-cookie`, {
    withCredentials: true,
  });

  let res = await axios.post(
    `${process.env.REACT_APP_API_URL}/api/reset-password-confirm`,
    user,
    {
      withCredentials: true,
    }
  );

  return res.data;
};

const resetPassword = async (token, password) => {
  const user = new FormData();
  user.append('password', password);
  user.append('token', token);

  await axios.get(`${process.env.REACT_APP_API_URL}/sanctum/csrf-cookie`, {
    withCredentials: true,
  });

  let res = await axios.post(
    `${process.env.REACT_APP_API_URL}/api/reset-password`,
    user,
    {
      withCredentials: true,
    }
  );

  return await res.data;
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
