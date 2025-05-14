import { useContext, Fragment /* useEffect */ } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { users, loading, errorMessage /* fetchFirst30Users */ } =
    githubContext;

  /*  useEffect(() => {
    fetchFirst30Users();
    // eslint-disable-next-line
  }, []); */

  return (
    <Fragment>
      {loading && <Spinner />}
      {!loading && errorMessage && (
        <div>
          <h1
            style={{ marginBottom: '50vh', marginTop: '30px' }}
            className='text-center text-danger'>
            {errorMessage}
          </h1>
        </div>
      )}
      {!loading && !errorMessage && users.length > 0 && (
        <div className='grid-3' style={{ marginBottom: '60vh' }}>
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      )}
    </Fragment>
  );
};

/* const userGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
}; */

export default Users;
