import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const ByCountry = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation('home');
  const { countries } = useSelector((state) => state);

  return (
    <div className='-mx-4 md:mx-0'>
      <div className='w-60 mt-0 md:mt-1 relative md:border md:border-gray-300 rounded-md shadow-sm'>
        <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
          <svg
            className='w-4 h-4 md:h-6 md:w-6 text-gray-600'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </div>
        <input
          type='text'
          name='search'
          id='search'
          className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 md:pl-14 py-4 text-sm md:text-base border-gray-300 rounded-md outline-none'
          placeholder={t('search_by_country')}
        />
      </div>

      <div className='my-0 md:my-10'>
        <div className='overflow-x-auto rounded-md text-xs md:text-sm border border-gray-100'>
          <div className='grid grid-cols-4 gap-4 bg-gray-100 py-5 pl-4 md:pl-10 font-semibold'>
            <div className=''>
              <button
                type='submit'
                className="cursor-pointer flex items-center self-start @if(app()->getLocale() === 'ka')  @endif"
              >
                <span className='font-semibold'>{t('location')}</span>
                <div className='ml-1'>
                  <div className="mb-0.5 transform rotate-180  opacity-25 @if($locationSort == 'DESC') opacity-100 @endif">
                    <img
                      src={
                        'https://coronatime.tazo.redberryinternship.ge/images/vector.png'
                      }
                      alt=''
                    />
                  </div>
                  <div className="opacity-25 @if($locationSort == 'ASC') opacity-100 @endif">
                    <img
                      src={
                        'https://coronatime.tazo.redberryinternship.ge/images/vector.png'
                      }
                      alt=''
                    />
                  </div>
                </div>
              </button>
            </div>
            <div>
              <button
                type='submit'
                className="-ml-0.5 cursor-pointer flex items-center self-start @if(app()->getLocale() === 'ka') გ @endif"
              >
                <span className='font-semibold'>{t('new_case')}</span>
                <div className='ml-1'>
                  <div className="mb-0.5 transform rotate-180  opacity-25 @if($newCaseSort == 'DESC') opacity-100 @endif">
                    <img
                      src={
                        'https://coronatime.tazo.redberryinternship.ge/images/vector.png'
                      }
                      alt=''
                    />
                  </div>
                  <div className="opacity-25 @if($newCaseSort == 'ASC') opacity-100 @endif">
                    <img
                      src={
                        'https://coronatime.tazo.redberryinternship.ge/images/vector.png'
                      }
                      alt=''
                    />
                  </div>
                </div>
              </button>
            </div>
            <div className=''>
              <button
                type='submit'
                className="-ml-1.5 cursor-pointer flex items-center self-start @if(app()->getLocale() === 'ka') break-all @endif"
              >
                <span className='font-semibold'>{t('deaths')}</span>
                <div className='ml-1'>
                  <div className="mb-0.5 transform rotate-180  opacity-25 @if($deathsSort == 'DESC') opacity-100 @endif">
                    <img
                      src={
                        'https://coronatime.tazo.redberryinternship.ge/images/vector.png'
                      }
                      alt=''
                    />
                  </div>
                  <div className="opacity-25 @if($deathsSort == 'ASC') opacity-100 @endif">
                    <img
                      src={
                        'https://coronatime.tazo.redberryinternship.ge/images/vector.png'
                      }
                      alt=''
                    />
                  </div>
                </div>
              </button>
            </div>
            <div>
              <button
                type='submit'
                className="-ml-3 cursor-pointer flex items-center self-start @if(app()->getLocale() === 'ka') break-all @endif"
              >
                <span className='font-semibold'>{t('recovered')}</span>
                <div className='ml-1'>
                  <div className="mb-0.5  transform rotate-180 opacity-25 @if($recoveredSort == 'DESC') opacity-100 @endif">
                    <img
                      src={
                        'https://coronatime.tazo.redberryinternship.ge/images/vector.png'
                      }
                      alt=''
                    />
                  </div>
                  <div className="opacity-25 @if($recoveredSort == 'ASC') opacity-100 @endif">
                    <img
                      src={
                        'https://coronatime.tazo.redberryinternship.ge/images/vector.png'
                      }
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
              countries.countries.map((country) => (
                <div
                  key={country.id}
                  className='grid grid-cols-4 gap-4 py-5 pl-4 md:pl-10 border-b border-gray-100 w-full'
                >
                  <div>{country.country[i18n.language]}</div>
                  <div>{country.confirmed}</div>
                  <div>{country.deaths}</div>
                  <div>{country.recovered}</div>
                </div>
              ))}

            {countries.status &&
              countries.status === 'success' &&
              countries.countries.length === 0 && (
                <div className='px-5 md:px-10 py-5 text-gray-400'>
                  {t('countries_not_found')}
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ByCountry;
