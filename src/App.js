import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/auth/login/Login';
import Registration from './components/auth/registration/Registration';
import Auth from './components/auth/Auth';
import Dashboard from './components/dashboard/Dashboard';
import Worldwide from './components/dashboard/worldwide/Worldwide';
import EmailConfirmation from './components/auth/EmailConfirmation';

function App() {
  const user = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state);

  console.log(user);
  console.log(message.successMessage);

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
        </Route>

        <Route
          path='/dashboard'
          element={user.isLoggedIn ? <Dashboard /> : <Navigate to={'/'} />}
        >
          <Route index element={<Worldwide />} />
        </Route>
      </Routes>

      {message.successMessage && (
        <div className='fixed bottom-0 right-0 bg-gray-800 text-gray-50'>
          {message.successMessage}
        </div>
      )}
    </>
  );
}

export default App;
