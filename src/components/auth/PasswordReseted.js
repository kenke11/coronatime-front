import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CheckCircle from 'UI/icons/CheckCircle';

const PasswordReseted = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col w-full'>
      <div className='flex justify-center mt-16'>
        <img
          src={`${process.env.REACT_APP_API_URL}/images/logo.png`}
          alt='logo'
        />
      </div>
      <div>
        <div className='flex justify-center mt-60'>
          <div>
            <div className='text-center flex justify-center'>
              <CheckCircle />
            </div>
            <div className='text-center mt-4'>
              {t('password_updated_successfully')}
            </div>
            <div className='text-center mt-12'>
              <Link
                to={'/login'}
                className='bg-green-500 uppercase text-white font-semibold hover:bg-green-600 px-24 py-5 border-green-600 transition duration-150 rounded-xl cursor-pointer'
              >
                {t('log_in')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReseted;
