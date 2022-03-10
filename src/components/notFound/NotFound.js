import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='h-screen overflow-hidden flex relative align-center justify-center  bg-gradient-to-r from-violet-800 to-blue-900'>
      <div className='absolute top-1/4 text-white text-center'>
        <div>ERROR</div>
        <h1>404</h1>
        <hr />
        <div>Page Not Found</div>
        <div className='mt-3 underline hover:text-gray-300'>
          <Link to='/'>GO HOME</Link>
        </div>
      </div>

      <div className='w-28 absolute top-1/2 transition animation-duration-500 animate-[wiggle_5s_ease-in-out_infinite]'>
        <img
          src='https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png'
          alt='astronaut'
        />
      </div>
    </div>
  );
};

export default NotFound;
