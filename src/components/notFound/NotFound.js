import classes from 'components/notFound/NotFound.module.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <div>ERROR</div>
        <h1>404</h1>
        <hr />
        <div>Page Not Found</div>
        <div className='mt-3 underline hover:text-gray-300'>
          <Link to='/'>GO HOME</Link>
        </div>
      </div>

      <div className={classes.astronaut}>
        <img
          src='https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png'
          alt='astronaut'
        />
      </div>
    </div>
  );
};

export default NotFound;
