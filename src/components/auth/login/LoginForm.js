import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import ExclamationCircle from 'UI/icons/ExclamationCircle';
import { login } from 'store/slices/auth';

const schema = yup
  .object({
    username: yup.string().required().min(3),
    password: yup.string().required().min(3),
  })
  .required();

const LoginForm = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const { message } = useSelector((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const loginSubmitHandler = (data) => {
    setLoading(true);
    dispatch(
      login({
        username: data.username,
        password: data.password,
        remember_me: data.remember_me,
      })
    )
      .unwrap()
      .catch(setLoading(false));
  };

  return (
    <form className='space-y-6' onSubmit={handleSubmit(loginSubmitHandler)}>
      <div className='h-2'>
        {message.errorMessage && (
          <p className='text-red-600 text-xs font-semibold'>
            {t(message.errorMessage)}
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
            className={`border ${
              errors.username ? ' border-red-600 ' : ' border-gray-300 '
            } appearance-none block w-full px-3 py-2 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            placeholder={t('enter_unique_username_or_email')}
            {...register('username', { required: true, min: 3, max: 255 })}
          />
          {errors.username && (
            <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
              <ExclamationCircle />
            </div>
          )}
        </div>

        <div className='mt-1 h-2'>
          {errors.username && (
            <div className='text-red-600 font-semibold text-xs flex '>
              <ExclamationCircle />
              <span className='ml-2 self-center'>
                {errors.username.message}
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
            autoComplete='off'
            className={`${
              errors.password ? 'border-red-600 ' : 'border-gray-300 '
            }appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            placeholder={t('fill_in_password')}
            {...register('password', { required: true, min: 3, max: 255 })}
          />
          {errors.password && (
            <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
              <ExclamationCircle />
            </div>
          )}
        </div>
        <div className='mt-1 h-5'>
          {errors.password && (
            <div className='text-red-600 font-semibold text-xs flex '>
              <ExclamationCircle />
              <span className='ml-2 self-center'>
                {errors.password.message}
              </span>
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
            {...register('remember_me')}
          />
          <label
            htmlFor='remember_me'
            className='ml-2 block font-semibold text-xs text-gray-900'
          >
            {t('remember_this_device')}
          </label>
        </div>

        <div className='text-xs'>
          <Link
            to={'/reset-password'}
            className='font-semibold text-indigo-600 hover:text-indigo-500'
          >
            {t('forgot_your_password')}
          </Link>
        </div>
      </div>

      <div>
        <button
          type='submit'
          className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
          disabled={loading}
        >
          {t('sign_in')}
        </button>
      </div>

      <div className='flex justify-center text-gray-500'>
        <span>
          {t('dont_have_and_account')}{' '}
          <Link to='/registration' className='font-semibold text-gray-800'>
            {t('sign_up_for_free')}
          </Link>
        </span>
      </div>
    </form>
  );
};

export default LoginForm;
