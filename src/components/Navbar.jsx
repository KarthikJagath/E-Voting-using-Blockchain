import React from 'react';
import "./cssComponents/Navbar.css";

const Navbar = () => {
  return (
    <nav>
        <h1>E-Voting</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/candidates">Candidates</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
