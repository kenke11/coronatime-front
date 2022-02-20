import { useParams } from 'react-router-dom';
import * as yup from 'yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

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
  const params = useParams();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const resetPasswordSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <form
      className='space-y-6'
      onSubmit={handleSubmit(resetPasswordSubmitHandler)}
    >
      {/*@if($errors->any())*/}
      {/*<ul>*/}
      {/*  @foreach($errors as $error)*/}
      {/*  <li>{{$error}}</li>*/}
      {/*  @endforeach*/}
      {/*</ul>*/}
      {/*@endif*/}

      <input type='hidden' value={params.token} />

      <div className='space-y-1'>
        <label
          htmlFor='password'
          className='block text-sm font-semibold text-gray-900'
        >
          Password
        </label>
        <div className='mt-1 relative'>
          <input
            id='password'
            name='password'
            type='password'
            className={`border ${
              errors.password ? ' border-red-600 ' : ' border-gray-300 '
            } appearance-none block w-full px-3 py-2 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            placeholder='Fill in password'
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
          Repeat password
        </label>
        <div className='mt-1 relative'>
          <input
            id='password_confirmation'
            name='password_confirmation'
            type='password'
            className={`border ${
              errors.password_confirmation
                ? ' border-red-600 '
                : ' border-gray-300 '
            } appearance-none block w-full px-3 py-2 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            placeholder='Repeat password'
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

      <div>
        <button
          type='submit'
          className='w-full flex justify-center uppercase py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
        >
          SAVE CHANGES
        </button>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
