import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Header from './header/Header';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountries } from '../../store/slices/statistic';

const Dashboard = () => {
  const { t } = useTranslation();

  const { pathname } = useLocation();
  const [location, setLocation] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    if (pathname === '/dashboard') {
      setLocation('worldwide_statistics');
    } else if (pathname === '/dashboard/by-country') {
      setLocation('statistics_by_country');
    }
  }, [pathname]);

  return (
    <div>
      <Header />

      <nav className='mx-4 md:mx-28'>
        <div className='my-4 md:my-10'>
          <h2 className='font-semibold text-xl md:text-2xl'>{t(location)}</h2>
        </div>
        <div>
          <div className='flex space-x-6 md:space-x-20 border-b border-gray-300 text-sm md:text-md'>
            <NavLink
              to={'/dashboard'}
              end
              className={({ isActive }) =>
                'border-b-4 hover:border-gray-900 transition duration-150 pb-6 ' +
                (isActive
                  ? ' font-semibold border-gray-900'
                  : ' border-opacity-0 ')
              }
            >
              {t('worldwide')}
            </NavLink>
            <NavLink
              to={'by-country'}
              className={({ isActive }) =>
                'border-b-4 hover:border-gray-900 transition duration-150 pb-6 ' +
                (isActive
                  ? ' font-semibold border-gray-900'
                  : ' border-opacity-0')
              }
            >
              {t('by_country')}
            </NavLink>
          </div>
        </div>
      </nav>

      <div className='mx-4 md:mx-28  pt-0 md:pt-10'>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
