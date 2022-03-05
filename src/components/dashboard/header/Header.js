import HeaderLogo from 'components/dashboard/header/HeaderLogo';
import LanguageChangeWindow from 'components/dashboard/header/LanguageChangeWindow';
import UserMenu from 'components/dashboard/header/UserMenu';

const Header = () => {
  return (
    <>
      <header>
        <div className='relative bg-white border-b-2 border-gray-100'>
          <div className='px-6 md:px-28'>
            <div className='flex justify-between items-center py-6'>
              <div className='flex justify-start lg:w-0 lg:flex-1'>
                <HeaderLogo />
              </div>
              <div className='flex space-x-6'>
                <LanguageChangeWindow />

                <UserMenu />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
