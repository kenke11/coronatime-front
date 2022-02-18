import HeaderLogo from './HeaderLogo';
import LanguageChangeWindow from './LanguageChangeWindow';
import UserMenu from './UserMenu';

const Header = () => {
  return (
    <>
      <header>
        <div className='relative bg-white border-b-2 border-gray-100'>
          <div className='px-6 px-4 md:px-28'>
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
