import { Fragment } from 'react';
import spinner from '../../assets/spinner.gif';

export const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} alt='Loading...' className='spinner-image' />
    </Fragment>
  );
};

export default Spinner;
