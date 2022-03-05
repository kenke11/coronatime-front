import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { signup } from 'store/slices/auth';

const schema = yup
  .object({
    username: yup.string().required().min(3),
    email: yup.string().required().email().min(3),
    password: yup
      .string()
      .required('Password is required')
      .min(4, 'Password length should be at least 4 characters'),
    password_confirmation: yup
      .string()
      .required('Confirm Password is required')
      .oneOf([yup.ref('password')], 'Passwords must and should match'),
  })
  .required();

const RegistrationForm = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const { message } = useSelector((state) => state);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const registerSubmitHandler = (data) => {
    setLoading(true);

    dispatch(
      signup({
        username: data.username,
        email: data.email,
        password: data.password,
      })
    )
      .unwrap()
      .then((response) => {
        if (response.status === 'error') {
          setLoading(false);
        } else {
          navigate('/email-confirmation', { replace: true });
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <form className='space-y-6' onSubmit={handleSubmit(registerSubmitHandler)}>
      <div>
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
            className={`border ${
              errors.username || message.errorMessage.username
                ? ' border-red-600 '
                : ' border-gray-300 '
            } appearance-none block w-full px-3 py-2 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            placeholder={t('enter_unique_username')}
            {...register('username')}
          />
          {(errors.username || message.errorMessage.username) && (
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
        </div>
        <div className='mt-1 h-3'>
          {(errors.username || message.errorMessage.username) && (
            <div className='mt-1 text-red-600 font-semibold text-xs flex '>
              <svg className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                <path
                  fillRule='evenodd'
                  d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='ml-2 self-center'>
                {errors.username
                  ? errors.username.message
                  : message.errorMessage.username}
              </span>
            </div>
          )}
          {!errors.username && !message.errorMessage.username && (
            <div className='mt-1'>
              <p className='text-gray-400 text-xs'>
                {t('username_should_be_unique_min_3_symbols')}
              </p>
            </div>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor='email'
          className='block text-sm font-semibold text-gray-900'
        >
          {t('email')}
        </label>
        <div className='mt-1 relative'>
          <input
            id='email'
            name='email'
            type='email'
            className={`border ${
              errors.email || message.errorMessage.email
                ? ' border-red-600 '
                : ' border-gray-300 '
            } appearance-none block w-full px-3 py-2 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            placeholder={t('enter_unique_email')}
            {...register('email')}
          />
          {(errors.email || message.errorMessage.email) && (
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
        </div>
        <div className='mt-1 h-2'>
          {(errors.email || message.errorMessage.email) && (
            <div className='text-red-600 font-semibold text-xs flex '>
              <svg className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                <path
                  fillRule='evenodd'
                  d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='ml-2 self-center'>
                {errors.email
                  ? errors.email.message
                  : message.errorMessage.email}
              </span>
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
            autoComplete='current-password'
            className={`border ${
              errors.password ? ' border-red-600 ' : ' border-gray-300 '
            } appearance-none block w-full px-3 py-2 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            placeholder={t('fill_in_password')}
            {...register('password')}
          />
          {errors.password && (
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
        </div>
        <div className='mt-1 h-2'>
          {errors.password && (
            <div className='text-red-600 font-semibold text-xs flex '>
              <svg className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                <path
                  fillRule='evenodd'
                  d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='ml-2 self-center'>
                {errors.password.message}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className='space-y-1'>
        <label
          htmlFor='password_confirmation'
          className='block text-sm font-semibold text-gray-900'
        >
          {t('repeat_password')}
        </label>
        <div className='mt-1 relative'>
          <input
            id='password_confirmation'
            name='password_confirmation'
            type='password'
            autoComplete='current-password'
            className={`border ${
              errors.password_confirmation
                ? ' border-red-600 '
                : ' border-gray-300 '
            } appearance-none block w-full px-3 py-2 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            placeholder={t('repeat_password')}
            {...register('password_confirmation')}
          />
          {errors.password_confirmation && (
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
        </div>
        <div className='mt-1 h-2'>
          {errors.password_confirmation && (
            <div className='text-red-600 font-semibold text-xs flex '>
              <svg className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                <path
                  fillRule='evenodd'
                  d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='ml-2 self-center'>
                {errors.password_confirmation.message}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <input
            id='remember-me'
            name='remember-me'
            type='checkbox'
            className='h-4 w-4 text-green-500'
          />
          <label
            htmlFor='remember-me'
            className='ml-2 block font-semibold text-sm text-gray-900'
          >
            {t('remember_this_device')}
          </label>
        </div>
      </div>

      <div>
        <button
          type='submit'
          className='w-full flex justify-center uppercase py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-400'
          disabled={loading}
        >
          {t('sign_up')}
        </button>
      </div>

      <div className='flex justify-center text-gray-500'>
        <span>
          {t('already_have_an_account')}{' '}
          <Link to={'/login'} className='font-semibold text-gray-800'>
            {t('log_in')}
          </Link>
        </span>
      </div>
    </form>
  );
};

export default RegistrationForm;
