import { useTranslation } from 'react-i18next';
import CheckCircle from 'UI/icons/CheckCircle';

const EmailConfirmation = () => {
  const { t } = useTranslation();

  return (
    <div className='min-h-screen w-full flex flex-col '>
      <div className='flex justify-center mt-16'>
        <img
          src={`${process.env.REACT_APP_API_URL}/images/logo.png`}
          alt='logo'
        />
      </div>
      <div>
        <div className='flex justify-center mt-48 md:mt-72'>
          <div>
            <div className='text-center flex justify-center'>
              <CheckCircle />
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
