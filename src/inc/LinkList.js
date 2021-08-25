import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const LinkList = () => {
  return(
    <>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/home1">Home1</Link>
          </li>
        </ul>
    </>
  )
}

export default LinkList;