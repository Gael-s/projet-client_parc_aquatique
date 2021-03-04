import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";

const ListerAdmin = ({ user }) => {
  const [data, setData] = useState({
    user: "",
  });
  const [message, setMessage] = useState();

  useEffect(() => {
    setData({ user });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/Admin/delete", {
      method: "DELETE",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        setMessage(res.message);
        setTimeout(() => {
          setMessage();
        }, 2000);
        setTimeout(() => {
          window.location.reload(false);
        }, 2000);
      });
  };

  return (
    <>
      <tr>
        <td>{user}</td>
        <td>
          <button type="submit" onClick={handleSubmit}>
            Supprimer
          </button>
          {!message ? null : <div className="message">{message}</div>}
        </td>
      </tr>
    </>
  );
};

ListerAdmin.propTypes = {
  user: PropTypes.string.isRequired,
};

export default ListerAdmin;
