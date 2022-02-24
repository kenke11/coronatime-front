import { useTranslation } from 'react-i18next';

const EmailConfirmation = () => {
  const { t } = useTranslation();

  return (
    <div className='min-h-screen w-full flex flex-col '>
      <div className='flex justify-center mt-16'>
        <img
          src={
            'https://coronatime-api.tazo.redberryinternship.ge/images/logo.png'
          }
          alt='logo'
        />
      </div>
      <div>
        <div className='flex justify-center mt-48 md:mt-72'>
          <div>
            <div className='text-center flex justify-center'>
              <svg
                className='h-14 w-14 text-green-500 bg-green-200 rounded-full'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='text-center mt-4'>
              {t('we_have_sent_you_a_confirmation_email')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmation;
