import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { login } from 'store/slices/auth';
import Input from 'UI/form/Input';

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

      <Input
        errors={errors}
        message={message}
        register={register}
        name='username'
        text='text'
      />

      <Input
        errors={errors}
        message={message}
        register={register}
        name='password'
        text='password'
      />

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
