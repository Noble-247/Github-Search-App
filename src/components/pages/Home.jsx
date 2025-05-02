import { Fragment } from 'react';
import Search from '../users/Search';
import Users from '../users/Users';

function Home() {
  return (
    <Fragment>
      <div className='container'>
        <div className='home-header text-center my-4'>
          <h1 className='large text-primary'>GitHub User Explorer</h1>
          <p className='lead mb-3'>
            Search GitHub profiles and discover developers from around the world
          </p>
        </div>

        <div className='search-container card bg-light p-2 mb-4'>
          <h2 className='text-dark medium mb-2'>Search Users</h2>
          <Search />
        </div>

        <div className='results-container'>
          <Users />
        </div>

        <div className='quick-tips card bg-white p-2 my-3'>
          <h3 className='text-primary'>
            <i className='fas fa-info-circle'></i> Quick Tips
          </h3>
          <ul className='list'>
            <li>Type a username and press enter to search</li>
            <li>
              Click on &quot;More&quot; to view detailed profile information
            </li>
            <li>View repositories, followers, and following counts</li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
