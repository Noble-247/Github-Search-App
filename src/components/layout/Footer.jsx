import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section'>
          <h4>Github Search App</h4>
          <p>
            Search and explore Github users and their repositories with ease.
          </p>
        </div>
        <div className='footer-section'>
          <h4>Connect</h4>
          <div className='social-links'>
            <a
              href='https://github.com/yourusername'
              target='_blank'
              rel='noopener noreferrer'
              className='social-link'>
              <FaGithub />
            </a>
            <a
              href='https://linkedin.com/in/yourusername'
              target='_blank'
              rel='noopener noreferrer'
              className='social-link'>
              <FaLinkedin />
            </a>
            <a
              href='https://emmanuel4real.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='social-link'>
              <FaGlobe />
            </a>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>
          &copy; {year} Github Search App. Designed by
          <a
            href='https://emmanuel4real.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
            className='footer-link'>
            {' '}
            Emmanuel
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
