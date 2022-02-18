import { Outlet } from 'react-router-dom';

import Header from './header/Header';

const Dashboard = () => {
  return (
    <div>
      <Header />

      <Outlet />
    </div>
  );
};

export default Dashboard;
