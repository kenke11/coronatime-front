import { Link } from 'react-router-dom';

const HeaderLogo = () => {
  return (
    <Link to={'/dashboard'}>
      <img
        className='h-8 w-auto sm:h-10'
        src={`${process.env.REACT_APP_API_URL}/images/logo.png`}
        alt='logo'
      />
    </Link>
  );
};

export default HeaderLogo;
