import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ResetPassword = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col w-full'>
      <div className='flex justify-center mt-16'>
        <img
          src={'https://coronatime.tazo.redberryinternship.ge/images/logo.png'}
          alt='logo'
        />
      </div>
      <div className='flex justify-center mt-20 md:mt-32'>
        <div className='flex-1 flex flex-col w-7/12 justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
          <div className='mx-auto w-full max-w-sm lg:w-96'>
            <div className='text-center flex justify-center'>
              <h1 className='font-semibold text-2xl'>{t('reset_password')}</h1>
            </div>
            <div className='mt-14'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
