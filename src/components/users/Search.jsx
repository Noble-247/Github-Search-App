import { useContext, useState } from 'react';
import GithubContext from '../context/github/githubContext';
import AlertContext from '../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const { clearUsers, searchUsers } = githubContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <input
          className='search-input'
          value={text}
          onChange={handleChange}
          type='text'
          name='text'
          placeholder='Search GitHub Users.....'
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-block btn-dark search-button'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          onClick={clearUsers}
          className='btn btn-block btn-light clear-button'>
          Clear Users
        </button>
      )}
    </div>
  );
};

export default Search;
