import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/auth/login/Login';
import Registration from './components/auth/registration/Registration';
import Auth from './components/auth/Auth';
import Dashboard from './components/dashboard/Dashboard';
import Worldwide from './components/dashboard/worldwide/Worldwide';
import EmailConfirmation from './components/auth/EmailConfirmation';
import SuccessNotification from './components/notifications/SuccessNotification';
import ResetPassword from './components/auth/reset-password/ResetPassword';
import ResetPasswordForm from './components/auth/reset-password/ResetPasswordForm';
import EmailConfirmationForm from './components/auth/reset-password/EmailConfirmationForm';

function App() {
  const user = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state);

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Navigate to={user.isLoggedIn ? '/dashboard' : '/login'} />}
        />
        <Route
          path='/'
          element={!user.isLoggedIn ? <Auth /> : <Navigate to={'/dashboard'} />}
        >
          <Route path='login' element={<Login />} />
          <Route path='registration' element={<Registration />} />
          <Route path='email-confirmation' element={<EmailConfirmation />} />

          <Route path='reset-password' element={<ResetPassword />}>
            <Route index element={<EmailConfirmationForm />} />
            <Route path=':token' element={<ResetPasswordForm />} />
          </Route>
        </Route>

        <Route
          path='/dashboard'
          element={user.isLoggedIn ? <Dashboard /> : <Navigate to={'/'} />}
        >
          <Route index element={<Worldwide />} />
        </Route>
      </Routes>

      {message.successMessage && (
        <SuccessNotification message={message.successMessage} />
      )}
    </>
  );
}

export default App;
