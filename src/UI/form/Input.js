import ExclamationCircle from 'UI/icons/ExclamationCircle';
import { useTranslation } from 'react-i18next';
import React from 'react';

const Input = ({ errors, message, register, name, text }) => {
  const { t } = useTranslation();

  return (
    <div>
      <label
        htmlFor={name}
        className='block text-sm font-semibold text-gray-900'
      >
        {t(name)}
      </label>
      <div className='mt-1 relative'>
        <input
          id={name}
          name={name}
          type={text}
          autoComplete='off'
          className={`border ${
            errors[name] || message.errorMessage[name]
              ? ' border-red-600 '
              : ' border-gray-300 '
          } appearance-none block w-full px-3 py-2 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          placeholder={t('enter_unique_username')}
          {...register(name)}
        />
        {(errors[name] || message.errorMessage[name]) && (
          <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
            <ExclamationCircle />
          </div>
        )}
      </div>
      <div className='mt-1 h-3'>
        {(errors[name] || message.errorMessage[name]) && (
          <div className='mt-1 text-red-600 font-semibold text-xs flex '>
            <ExclamationCircle />
            <span className='ml-2 self-center'>
              {errors[name] ? errors[name].message : message.errorMessage[name]}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
