import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';

const LanguageChangeWindow = () => {
  const { t, i18n } = useTranslation();
  const [languageWindow, setLanguageWindow] = useState(false);
  const movieWin = useRef();

  const languageHandle = (lang) => {
    i18n.changeLanguage(lang);
    setLanguageWindow(false);
  };

  const languageChangeWindow = () => {
    setLanguageWindow(!languageWindow);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (movieWin.current && !movieWin.current.contains(event.target)) {
        setLanguageWindow(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [movieWin]);

  return (
    <div>
      <button onClick={languageChangeWindow} className='flex items-center'>
        <span>{t('language')}</span>
        <svg
          className='h-4 w-4 ml-2'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>

      {languageWindow && (
        <div
          ref={movieWin}
          className='absolute border border-gray-200 rounded-md mt-5 bg-gray-100 -ml-8 md:-ml-4'
        >
          <div className='py-1 text-sm'>
            <button
              onClick={() => languageHandle('ge')}
              className='text-gray-700 block px-6 py-2 hover:bg-gray-200 w-full'
            >
              {t('georgian')}
            </button>
            <button
              onClick={() => languageHandle('en')}
              className='text-gray-700 block px-6 py-2 hover:bg-gray-200 w-full'
            >
              {t('english')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageChangeWindow;
