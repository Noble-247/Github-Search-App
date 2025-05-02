import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='footer-content container'>
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
              href='https://github.com/Noble-247'
              target='_blank'
              rel='noopener noreferrer'
              className='social-link'>
              <FaGithub />
            </a>
            <a
              href='https://www.linkedin.com/in/emmanuel-ekpobimi-7ab32b9b/'
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
      <div className='footer-bottom container'>
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
