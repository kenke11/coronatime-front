import { useTranslation } from 'react-i18next';

const Worldwide = () => {
  const { t } = useTranslation();

  return (
    <div className='mt-3'>
      <div>
        <div className='grid grid-cols-1 gap-6 grid-cols-1 grid-cols-1 md:hidden'>
          <div className='col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 bg-purple-100'>
            <div className='flex-1 flex flex-col p-10'>
              <img
                className='w-24 self-center'
                src={
                  'https://coronatime.tazo.redberryinternship.ge/images/stats1.png'
                }
                alt='stats'
              />
              <div className='mt-6 font-semibold'>{t('new_case')}</div>
              <div className='text-2xl font-semibold text-blue-700 mt-4'>
                {/*{{ $new_case }}*/}
                715 523
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-6 grid-cols-2 md:grid-cols-3 mt-4 md:mt-0'>
          <div className='col-span-1 hidden md:flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 bg-purple-100'>
            <div className='flex-1 flex flex-col p-10'>
              <img
                className='w-24 self-center'
                src={
                  'https://coronatime.tazo.redberryinternship.ge/images/stats1.png'
                }
                alt='stats'
              />
              <div className='mt-6 font-semibold text-sm md:text-xl'>
                {t('new_case')}
              </div>
              <div className='text-2xl md:text-4xl font-semibold text-blue-700 mt-4'>
                {/*{{ $new_case }}*/}715 523
              </div>
            </div>
          </div>

          <div className='col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 bg-green-100'>
            <div className='flex-1 flex flex-col py-10 md:p-10'>
              <img
                className='w-24 self-center'
                src={
                  'https://coronatime.tazo.redberryinternship.ge/images/stats2.png'
                }
                alt='stats'
              />
              <div className='mt-12 font-semibold text-xs md:text-base'>
                {t('recovered')}
              </div>
              <div className='text-2xl md:text-4xl font-semibold text-green-700 mt-4'>
                {/*{{ $recovered }}*/}8 332
              </div>
            </div>
          </div>

          <div className='col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 bg-yellow-50'>
            <div className='flex-1 flex flex-col py-10 md:px-10'>
              <img
                className='w-24 self-center'
                src={
                  'https://coronatime.tazo.redberryinternship.ge/images/stats3.png'
                }
                alt='stats'
              />
              <div className='mt-9 font-semibold text-xs md:text-base'>
                {t('deaths')}
              </div>
              <div className='text-2xl md:text-4xl font-semibold text-yellow-300 mt-4'>
                {/*{{ $deaths }}*/}8 332
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Worldwide;
