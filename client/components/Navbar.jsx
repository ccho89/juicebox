import React, { useState, useEffect } from "react";
import "../src/App.css";
import { Link } from "react-router-dom";
import coolImg from '../images/cool.jpeg'

const Navbar = () => {
  return (
    <div
      style={{
        // position: 'fixed',
        // top: '10px',
        marginTop: '0',
        width: '96%',
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center",
        // border: '1px solid white',
        padding: '15px',
        // zIndex: '100',
        marginLeft: '5px',
      marginRight: 'auto',
      marginBottom: '3rem',
      backgroundImage: `url(${coolImg})`,
      backgroundSize: 'cover',
      opacity: '0.9'
      }}
    >
      <h1>
        <Link to="/">JUICEBOX</Link>
      </h1>
      <nav>
        <Link to="/login" style={{ paddingRight: "20px" }}>
          Login
        </Link>
        <Link to="/register">Register</Link>
      </nav>
    </div>
  );
};

export default Navbar;
