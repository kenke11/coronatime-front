import { Link } from 'react-router-dom';

const HeaderLogo = () => {
  return (
    <Link to={'/dashboard'}>
      <img
        className='h-8 w-auto sm:h-10'
        src={'https://coronatime.tazo.redberryinternship.ge/images/logo.png'}
        alt='logo'
      />
    </Link>
  );
};

export default HeaderLogo;
