import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { signup } from 'store/slices/auth';
import Input from 'UI/form/Input';

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
        <Input
          errors={errors}
          message={message}
          name='username'
          text='text'
          register={register}
        />
        {!errors.username && !message.errorMessage.username && (
          <div className='absolute -mt-2'>
            <p className='text-gray-400 text-xs'>
              {t('username_should_be_unique_min_3_symbols')}
            </p>
          </div>
        )}
      </div>

      <Input
        errors={errors}
        message={message}
        register={register}
        name='email'
        text='email'
      />

      <Input
        errors={errors}
        message={message}
        register={register}
        name='password'
        text='password'
      />

      <Input
        errors={errors}
        message={message}
        register={register}
        name='password_confirmation'
        text='password'
      />

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
