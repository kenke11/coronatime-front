import Login from './components/auth/login/Login';
import { Routes, Route, Navigate } from 'react-router-dom';
import Registration from './components/auth/registration/Registration';
import Auth from './components/auth/Auth';
import Dashboard from './components/dashboard/Dashboard';
import Worldwide from './components/dashboard/worldwide/Worldwide';

function App() {
  const isLoggedIn = false;

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Navigate to={isLoggedIn ? '/dashboard' : '/login'} />}
        />
        <Route
          path='/'
          element={!isLoggedIn ? <Auth /> : <Navigate to={'/dashboard'} />}
        >
          <Route path='login' element={<Login />} />
          <Route path='registration' element={<Registration />} />
        </Route>

        <Route
          path='/dashboard'
          element={isLoggedIn ? <Dashboard /> : <Navigate to={'/'} />}
        >
          <Route index element={<Worldwide />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
