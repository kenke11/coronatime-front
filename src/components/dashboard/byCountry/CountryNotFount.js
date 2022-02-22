import { useTranslation } from 'react-i18next';

const CountryNotFount = () => {
  const { t } = useTranslation();

  return (
    <div className='px-5 md:px-10 py-5 text-gray-400'>
      {t('countries_not_found')}
    </div>
  );
};

export default CountryNotFount;
