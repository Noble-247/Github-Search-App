import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({
  searchUsers,
  showOrHideClearButton,
  clearUsers,
  showAlert,
}) => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      showAlert("Please enter something", "light");
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
      {showOrHideClearButton && (
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

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showOrHideClearButton: PropTypes.bool.isRequired,
  showAlert: PropTypes.func.isRequired,
};

export default Search;
