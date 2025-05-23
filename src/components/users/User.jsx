/* eslint-disable react/prop-types */
import { Fragment, useContext, useEffect } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';
import Spinner from '../layout/Spinner';
import { Link, useParams } from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../context/github/githubContext';

const User = () => {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user, getUserRepos, repos } = githubContext;
  let {
    name,
    avatar_url,
    location,
    bio,
    blog,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    company,
  } = user;

  const { login } = useParams();

  console.log(login);
  useEffect(() => {
    getUser(login);
    getUserRepos(login);
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {loading && <Spinner />}
      <Link to='/' className='btn btn-dark'>
        Back to Search
      </Link>
      Hireable:{' '}
      {hireable ? (
        <FiCheck className='text-success' style={{ verticalAlign: 'middle' }} />
      ) : (
        <FiX className='text-danger' style={{ verticalAlign: 'middle' }} />
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            alt=''
            className='round-img'
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a
            href={html_url}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-dark my-1'>
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-light'>Public Repos: {public_repos}</div>
        <div className='badge badge-dark'>Public_gist: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
