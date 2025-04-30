import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className='container text-center'>
      <div className='not-found-container'>
        <p className='text-uppercase large'>
          SORRY, LOOKS LIKE WE SENT YOU THE WRONG WAY{' '}
        </p>
        <p className='text-capitalize lead'>Let us guide you back</p>

        <Link to='/' className='btn btn-primary'>
          Head back to the homepage...
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
