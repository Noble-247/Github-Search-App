import React, { Fragment } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Users = ({ users, loading, errorMessage }) => {
  return (
    <Fragment>
      {loading && <Spinner />}
      {users && (
        <div className='grid-3' style={{ marginBottom: "60vh" }}>
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      )}
      {errorMessage && (
        <div>
          <h1
            style={{ marginBottom: "50vh", marginTop: "30px" }}
            className='text-center text-danger'
          >
            {errorMessage}
          </h1>
        </div>
      )}
    </Fragment>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

/* const userGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
}; */

export default Users;
