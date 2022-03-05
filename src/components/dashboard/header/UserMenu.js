import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { logout } from 'store/slices/auth';

const UserMenu = () => {
  const username = useSelector((state) => state.auth.user.user.username);

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const [userMenu, setUserMenu] = useState(false);
  const userMenuWindow = useRef(null);

  const [logoutModal, setLogoutModal] = useState(false);

  const userMenuHandler = () => {
    setUserMenu(true);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        userMenuWindow.current &&
        !userMenuWindow.current.contains(event.target)
      ) {
        setUserMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [userMenuWindow]);

  const logoutModalOpenHandler = () => {
    setLogoutModal(true);
  };

  const logoutModalCloseHandler = () => {
    setLogoutModal(false);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className='-mr-2 -my-2 md:hidden'>
        <button
          type='button'
          className='transform rotate-180 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 focus:outline-none'
          aria-expanded='false'
          onClick={userMenuHandler}
        >
          <svg
            className='h-6 w-6 text-gray-700'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            />
          </svg>
        </button>

        {userMenu && (
          <div
            ref={userMenuWindow}
            className='absolute border border-gray-200 rounded-md mt-3 bg-gray-100 py-3 px-2 -ml-10 mr-3'
          >
            <div className='py-1 px-2 text-sm flex flex-col items-center'>
              <div className='font-semibold py-1'>{username}</div>
              <div className='mt-1 border-t py-1'>
                <button onClick={logoutModalOpenHandler}>{t('log_out')}</button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className='hidden md:flex'>
        <div className='flex space-x-11 mr-4'>
          <div className='font-semibold'>{username}</div>
        </div>
        <div className='pl-4 border-l-2'>
          <button onClick={logoutModalOpenHandler}>{t('log_out')}</button>
        </div>
      </div>

      {logoutModal && (
        <div className='absolute calc-top flex justify-center items-center content-center bg-pale-black top-0 max-w-full'>
          <div
            className='fixed top-0 bottom-0 right-0 left-0 bg-gray-900 opacity-50 z-20'
            onClick={logoutModalCloseHandler}
          />
          <div className='py-5 px-5 rounded-xl border border-gray-300 bg-gray-200 w-72 self-end -mr-1 opacity-100 z-30'>
            <div>{t('do_you_really_want_to_log_out')}</div>
            <div className='flex justify-end  space-x-6 mt-5'>
              <button
                onClick={logoutHandler}
                className='px-2 py-1 border border-gray-300 rounded hover:bg-red-200 transition duration-150'
              >
                {t('log_out')}
              </button>
              <button
                className='px-2 py-1 border border-gray-300 rounded hover:bg-blue-200 transition duration-150'
                onClick={logoutModalCloseHandler}
              >
                {t('close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserMenu;
