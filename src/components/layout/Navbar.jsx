import { FaGithub, FaHome, FaInfoCircle } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className='navbar bg-primary'>
      <h1>
        <Link to='/' className='brand'>
          <FaGithub className='brand-icon' />{' '}
          <span className='brand-text'>Github Search App</span>
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/' className={location.pathname === '/' ? 'active' : ''}>
            <FaHome /> <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            to='/about'
            className={location.pathname === '/about' ? 'active' : ''}>
            <FaInfoCircle /> <span>About</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
