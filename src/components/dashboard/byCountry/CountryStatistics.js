import { useTranslation } from 'react-i18next';

const CountryStatistics = ({ country }) => {
  const { i18n } = useTranslation('home');

  return (
    <div className='grid grid-cols-4 gap-4 py-5 pl-4 md:pl-10 border-b border-gray-100 w-full'>
      <div>{country.country[i18n.language]}</div>
      <div>{country.confirmed}</div>
      <div>{country.deaths}</div>
      <div>{country.recovered}</div>
    </div>
  );
};

export default CountryStatistics;
