import React from 'react';
import CoronaVaccineImg from '../CoronaVaccineImg';
import { useTranslation } from 'react-i18next';
import LoginForm from './LoginForm';

const Login = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className='flex-1 flex flex-col w-7/12 justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
        <div className='mx-auto w-full max-w-sm lg:w-96'>
          <div>
            <img
              className='h-12 w-auto'
              src={
                'https://coronatime.tazo.redberryinternship.ge/images/logo.png'
              }
              alt='Workflow'
            />
            <h2 className='mt-16 text-3xl font-semibold text-gray-900'>
              {t('welcome_back')}
            </h2>
            <p className='mt-4 text-sm text-gray-500'>
              {t('welcome_back_please_enter_your_details')}
            </p>
          </div>
          <div className='mt-8'>
            <div className='mt-6'>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
      <div className='hidden lg:block relative w-0 flex-1'>
        <CoronaVaccineImg />
      </div>
    </>
  );
};

export default Login;
