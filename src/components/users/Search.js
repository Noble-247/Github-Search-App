import React, { useContext, useState } from "react";
import GithubContext from "../context/github/githubContext";
import AlertContext from "../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const { clearUsers, searchUsers } = githubContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <input
          style={formStyles}
          value={text}
          onChange={handleChange}
          type='text'
          name='text'
          placeholder='Search GitHub Users.....'
        />
        <input
          style={{ padding: "10px 20px" }}
          type='submit'
          value='Search'
          className='btn btn-block btn-dark'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          style={{ padding: "10px 20px" }}
          onClick={clearUsers}
          className='btn btn-block btn-light'
        >
          Clear Users
        </button>
      )}
    </div>
  );
};
const formStyles = {
  outlineColor: " #dc3545",
  padding: "0.4rem 0",
};

export default Search;
