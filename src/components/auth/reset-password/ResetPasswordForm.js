import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { resetPassword } from 'store/slices/auth';
import Input from 'UI/form/Input';

const schema = yup
  .object({
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

const ResetPasswordForm = () => {
  const { t } = useTranslation();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const { message } = useSelector((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const resetPasswordSubmitHandler = (data) => {
    setLoading(true);

    try {
      let res = dispatch(
        resetPassword({
          token: data.token,
          password: data.password,
        })
      ).unwrap();

      if (res.status === 'error') {
        setLoading(false);
      } else {
        navigate('/password-reseted', { replace: true });
      }
    } catch {
      setLoading(false);
    }
  };

  return (
    <form
      className='space-y-6'
      onSubmit={handleSubmit(resetPasswordSubmitHandler)}
    >
      {message.errorMessage && (
        <ul>
          {message.errorMessage.map((error) => (
            <li>{error}</li>
          ))}
        </ul>
      )}

      <input type='hidden' value={params.token} {...register('token')} />

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

      <div>
        <button
          type='submit'
          className='w-full flex justify-center uppercase py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-400'
          disabled={loading}
        >
          {t('save_change')}
        </button>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
