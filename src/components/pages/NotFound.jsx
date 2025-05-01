import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

function NotFound() {
  return (
    <div className='not-found-container'>
      <div className='not-found-content'>
        <h1>
          4<span className='zero'>0</span>4
        </h1>
        <h2>Oops! Page Not Found</h2>
        <p>
          The page you&#39;re looking for seems to have vanished into thin air!
        </p>
        <Link to='/' className='home-button'>
          <FaHome className='home-icon' />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
