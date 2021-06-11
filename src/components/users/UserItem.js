import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  const imageStyles = {
    width: "60px",
  };

  return (
    <div>
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt='userImage'
          className='round-img'
          style={imageStyles}
        />
        <h3>{login}</h3>
        <div>
          <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
            More
          </Link>
        </div>
      </div>
    </div>

    /*
      <div style={userItemStyles}>
        <div>User Items</div>
      </div>*/
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
