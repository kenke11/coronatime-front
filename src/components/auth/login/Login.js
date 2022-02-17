import React from 'react';
import CoronaVaccineImg from '../CoronaVaccineImg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

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
              <form className='space-y-6'>
                <div className='h-2'>
                  {false && (
                    <p className='text-red-600 text-xs font-semibold'>
                      not_verified
                    </p>
                  )}
                  {false && (
                    <p className='text-red-600 text-xs font-semibold'>
                      not_login
                    </p>
                  )}
                </div>

                <div className='mt-3'>
                  <label
                    htmlFor='username'
                    className='block text-sm font-semibold text-gray-900'
                  >
                    {t('username')}
                  </label>
                  <div className='mt-1 relative'>
                    <input
                      id='username'
                      name='username'
                      type='text'
                      className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      placeholder={t('enter_unique_username_or_email')}
                    />
                    {false && (
                      <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                        <svg
                          className='h-5 w-5 text-red-600'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            fillRule='evenodd'
                            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </div>
                    )}
                    {false && (
                      <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                        <svg
                          className='h-5 w-5 text-green-600'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  <div className='mt-1 h-2'>
                    {false && (
                      <div className='text-red-600 font-semibold text-xs flex '>
                        <svg
                          className='h-5 w-5'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
                            clip-rule='evenodd'
                          />
                        </svg>
                        <span className='ml-2 self-center'>error</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className='space-y-1'>
                  <label
                    htmlFor='password'
                    className='block text-sm font-semibold text-gray-900'
                  >
                    {t('password')}
                  </label>
                  <div className='mt-1 relative'>
                    <input
                      id='password'
                      name='password'
                      type='password'
                      autoComplete='off'
                      className="@if($password) @error('password') border-red-600 @else border-green-600 @enderror @endif appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder={t('fill_in_password')}
                    />
                    {false && (
                      <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                        <svg
                          className='h-5 w-5 text-red-600'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </div>
                    )}
                    {false && (
                      <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                        <svg
                          className='h-5 w-5 text-green-600'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className='mt-1 h-5'>
                    {false && (
                      <div className='text-red-600 font-semibold text-xs flex '>
                        <svg
                          className='h-5 w-5'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
                            clip-rule='evenodd'
                          />
                        </svg>
                        <span className='ml-2 self-center'>password error</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <input
                      id='remember_me'
                      name='remember_me'
                      type='checkbox'
                      value='remember_me'
                      className='h-4 w-4 text-green-500'
                    />
                    <label
                      htmlFor='remember_me'
                      className='ml-2 block font-semibold text-xs text-gray-900'
                    >
                      {t('remember_this_device')}
                    </label>
                  </div>

                  <div className='text-xs'>
                    <a className='font-semibold text-indigo-600 hover:text-indigo-500'>
                      {t('forgot_your_password')}
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type='submit'
                    className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                  >
                    {t('sign_in')}
                  </button>
                </div>

                <div className='flex justify-center text-gray-500'>
                  <span>
                    {t('dont_have_and_account')}
                    <Link
                      to='/registration'
                      className='font-semibold text-gray-800'
                    >
                      {t('sign_up_for_free')}
                    </Link>
                  </span>
                </div>
              </form>
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
