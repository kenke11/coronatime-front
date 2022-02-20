import { Link } from 'react-router-dom';

const PasswordReseted = () => {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex justify-center mt-16'>
        <img
          src={'https://coronatime.tazo.redberryinternship.ge/images/logo.png'}
          alt='logo'
        />
      </div>
      <div>
        <div className='flex justify-center mt-60'>
          <div>
            <div className='text-center flex justify-center'>
              <svg
                className='h-14 w-14 text-green-500 bg-green-200 rounded-full'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='text-center mt-4'>
              Your password has been updeted successfully
            </div>
            <div className='text-center mt-12'>
              <Link
                to={'/login'}
                className='bg-green-500 uppercase text-white font-semibold hover:bg-green-600 px-24 py-5 border-green-600 transition duration-150 rounded-xl cursor-pointer'
              >
                SIGN IN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReseted;
