import { useState } from 'react';
import NotificationSuccessCheck from 'UI/icons/NotificationSuccessCheck';
import ExitIcon from 'UI/icons/ExitIcon';

const SuccessNotification = (props) => {
  const [animation, setAnimation] = useState('opened');
  const closeNotification = () => {
    setAnimation('closed');
  };

  return (
    <div className={`absolute bottom-10 right-10 w-full`}>
      <div className='w-full flex flex-col items-center space-y-4 sm:items-end'>
        <div
          className={`${animation} fixed bottom-10 max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden`}
        >
          <div className='p-4'>
            <div className='flex items-start'>
              <div className='flex-shrink-0'>
                <NotificationSuccessCheck />
              </div>
              <div className='ml-3 w-0 flex-1 pt-0.5'>
                <p className='text-sm font-medium text-gray-900'>
                  {props.message}
                </p>
              </div>
              <div className='ml-4 flex-shrink-0 flex'>
                <button
                  onClick={closeNotification}
                  className='bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  <span className='sr-only'>Close</span>
                  <ExitIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessNotification;
