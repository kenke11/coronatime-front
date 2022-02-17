import { Outlet } from 'react-router-dom';

const Auth = () => {
  return (
    <div className='min-h-screen flex'>
      <Outlet />
    </div>
  );
};

export default Auth;
