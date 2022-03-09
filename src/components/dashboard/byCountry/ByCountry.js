import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import CountryNotFount from 'components/dashboard/byCountry/CountryNotFount';
import CountryStatistics from 'components/dashboard/byCountry/CountryStatistics';
import SearchIcon from 'UI/icons/SearchIcon';

const ByCountry = () => {
  const { t, i18n } = useTranslation();
  const { countries } = useSelector((state) => state);
  const [searchValue, setSearchValue] = useState('');

  const [sortLocation, setSortLocation] = useState('asc');
  const [sortConfirmed, setSortConfirmed] = useState(null);
  const [sortDeaths, setSortDeaths] = useState(null);
  const [sortRecovered, setSortRecovered] = useState(null);

  const searchHandler = (event) => {
    setSearchValue(event.target.value);
  };

  const sortByLocationHandler = () => {
    setSortLocation(sortLocation === 'asc' ? 'desc' : 'asc');
    setSortConfirmed(null);
    setSortDeaths(null);
    setSortRecovered(null);
  };

  const sortByConfirmedHandler = () => {
    setSortConfirmed(sortConfirmed === 'asc' ? 'desc' : 'asc');
    setSortLocation(null);
    setSortDeaths(null);
    setSortRecovered(null);
  };

  const sortByDeathsHandler = () => {
    setSortDeaths(sortDeaths === 'asc' ? 'desc' : 'asc');
    setSortConfirmed(null);
    setSortLocation(null);
    setSortRecovered(null);
  };

  const sortByRecoveredHandler = () => {
    setSortRecovered(sortRecovered === 'asc' ? 'desc' : 'asc');
    setSortConfirmed(null);
    setSortLocation(null);
    setSortDeaths(null);
  };

  return (
    <div className='-mx-4 md:mx-0'>
      <div className='w-60 mt-0 md:mt-1 relative md:border md:border-gray-300 rounded-md shadow-sm'>
        <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
          <SearchIcon />
        </div>
        <input
          type='text'
          name='search'
          id='search'
          className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 md:pl-14 py-4 text-sm md:text-base border-gray-300 rounded-md outline-none'
          placeholder={t('search_by_country')}
          onChange={searchHandler}
          value={searchValue}
        />
      </div>

      <div className='my-0 md:my-10'>
        <div className='overflow-x-auto rounded-md text-xs md:text-sm border border-gray-100'>
          <div className='grid grid-cols-4 gap-4 bg-gray-100 py-5 pl-4 md:pl-10 font-semibold'>
            <div>
              <button
                onClick={sortByLocationHandler}
                type='button'
                className={`cursor-pointer flex items-center self-start `}
              >
                <span className='font-semibold'>{t('location')}</span>
                <div className='ml-1'>
                  <div
                    className={`mb-0.5 transform rotate-180   ${
                      sortLocation === 'asc' ? 'opacity-100' : 'opacity-25'
                    }`}
                  >
                    <img
                      src={`${process.env.REACT_APP_API_URL}/images/vector.png`}
                      alt=''
                    />
                  </div>
                  <div
                    className={`mb-0.5 ${
                      sortLocation === 'desc' ? 'opacity-100' : 'opacity-25'
                    }`}
                  >
                    <img
                      src={`${process.env.REACT_APP_API_URL}/images/vector.png`}
                      alt=''
                    />
                  </div>
                </div>
              </button>
            </div>
            <div>
              <button
                onClick={sortByConfirmedHandler}
                type='button'
                className="-ml-0.5 cursor-pointer flex items-center self-start @if(app()->getLocale() === 'ka') გ @endif"
              >
                <span className='font-semibold'>{t('new_case')}</span>
                <div className='ml-1'>
                  <div
                    className={`mb-0.5 transform rotate-180   ${
                      sortConfirmed === 'asc' ? 'opacity-100' : 'opacity-25'
                    }`}
                  >
                    <img
                      src={`${process.env.REACT_APP_API_URL}/images/vector.png`}
                      alt=''
                    />
                  </div>
                  <div
                    className={`mb-0.5 ${
                      sortConfirmed === 'desc' ? 'opacity-100' : 'opacity-25'
                    }`}
                  >
                    <img
                      src={`${process.env.REACT_APP_API_URL}/images/vector.png`}
                      alt=''
                    />
                  </div>
                </div>
              </button>
            </div>
            <div>
              <button
                onClick={sortByDeathsHandler}
                type='button'
                className="-ml-1.5 cursor-pointer flex items-center self-start @if(app()->getLocale() === 'ka') break-all @endif"
              >
                <span className='font-semibold'>{t('deaths')}</span>
                <div className='ml-1'>
                  <div
                    className={`mb-0.5 transform rotate-180   ${
                      sortDeaths === 'asc' ? 'opacity-100' : 'opacity-25'
                    }`}
                  >
                    <img
                      src={`${process.env.REACT_APP_API_URL}/images/vector.png`}
                      alt=''
                    />
                  </div>
                  <div
                    className={`mb-0.5 ${
                      sortDeaths === 'desc' ? 'opacity-100' : 'opacity-25'
                    }`}
                  >
                    <img
                      src={`${process.env.REACT_APP_API_URL}/images/vector.png`}
                      alt=''
                    />
                  </div>
                </div>
              </button>
            </div>
            <div>
              <button
                onClick={sortByRecoveredHandler}
                type='submit'
                className="-ml-3 cursor-pointer flex items-center self-start @if(app()->getLocale() === 'ka') break-all @endif"
              >
                <span className='font-semibold'>{t('recovered')}</span>
                <div className='ml-1'>
                  <div
                    className={`mb-0.5 transform rotate-180   ${
                      sortRecovered === 'asc' ? 'opacity-100' : 'opacity-25'
                    }`}
                  >
                    <img
                      src={`${process.env.REACT_APP_API_URL}/images/vector.png`}
                      alt=''
                    />
                  </div>
                  <div
                    className={`mb-0.5 ${
                      sortRecovered === 'desc' ? 'opacity-100' : 'opacity-25'
                    }`}
                  >
                    <img
                      src={`${process.env.REACT_APP_API_URL}/images/vector.png`}
                      alt=''
                    />
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className='overflow-y-auto calc-table md:h-96 w-full'>
            {countries.status &&
              countries.status === 'success' &&
              countries.countries.length > 0 &&
              countries.countries
                .filter((value) => {
                  if (searchValue === '') {
                    return value;
                  } else if (
                    value.country[i18n.language]
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                  ) {
                    return value;
                  }
                })
                .sort((a, b) => {
                  if (sortLocation) {
                    return sortLocation === 'asc'
                      ? a.country[i18n.language].localeCompare(
                          b.country[i18n.language]
                        )
                      : b.country[i18n.language].localeCompare(
                          a.country[i18n.language]
                        );
                  }

                  if (sortConfirmed) {
                    return sortConfirmed === 'asc'
                      ? a.confirmed - b.confirmed
                      : b.confirmed - a.confirmed;
                  }

                  if (sortDeaths) {
                    return sortDeaths === 'asc'
                      ? a.deaths - b.deaths
                      : b.deaths - a.deaths;
                  }

                  if (sortRecovered) {
                    return sortRecovered === 'asc'
                      ? a.recovered - b.recovered
                      : b.recovered - a.recovered;
                  }
                })
                .map((country) => (
                  <CountryStatistics key={country.id} country={country} />
                ))}

            {countries.status &&
              countries.status === 'success' &&
              countries.countries.length === 0 && <CountryNotFount />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ByCountry;
