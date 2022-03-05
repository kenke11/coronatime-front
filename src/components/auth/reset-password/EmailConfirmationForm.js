import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { confirmationEmail } from 'store/slices/auth';
import ExclamationCircle from 'UI/icons/ExclamationCircle';

const schema = yup
  .object({
    email: yup.string().required().email().min(3),
  })
  .required();

const EmailConfirmationForm = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { message } = useSelector((state) => state);

  const dispatch = useDispatch();

  const EmailConfirmationSubmitHandler = (data) => {
    setLoading(true);
    dispatch(confirmationEmail({ email: data.email }))
      .unwrap()
      .then((response) => {
        if (response.status === 'error') {
          setLoading(false);
        } else {
          navigate('/email-confirmation', { replace: true });
        }
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return (
    <form
      className='space-y-6'
      onSubmit={handleSubmit(EmailConfirmationSubmitHandler)}
    >
      <div className='h-2'>
        {message.errorMessage && (
          <p className='text-red-600 fort-semibold text-sm'>
            {message.errorMessage.email}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor='email'
          className='block text-md font-semibold text-gray-900'
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
            placeholder={t('enter_email')}
            {...register('email')}
          />
          {(errors.email || message.errorMessage.email) && (
            <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
              <ExclamationCircle />
            </div>
          )}
        </div>
        <div className='mt-1 h-2'>
          {errors.email && (
            <div className='text-red-600 font-semibold text-xs flex '>
              <ExclamationCircle />
              <span className='ml-2 self-center'>{errors.email.message}</span>
            </div>
          )}
        </div>
      </div>
      <div>
        <button
          disabled={loading}
          type='submit'
          className='w-full flex justify-center uppercase py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-400'
        >
          {t('reset_password')}
        </button>
      </div>
    </form>
  );
};

export default EmailConfirmationForm;
