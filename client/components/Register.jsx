import React, { useState } from "react";
import moonImg from '../images/celestial.jpg'

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] =  useState(null);

  // Implement the registration logic using fetch
  // Send a POST request to server's register endpoint
  // Handle the response, set user state or display error message

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          name,
          location,
        }),
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }

      const data = await response.json();
      console.log("Registration successful:", data);

    } catch (error) {
      console.error("Registration error:", error.message);
      setError(error.message);
    }
  };

  return (
    <div style={{
      border: '1px solid white',
      borderRadius: '3px',
      width: '320px',
      height: '400px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '20px',
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundImage: `url(${moonImg})`,
      backgroundSize: 'cover'
    }}>

      <h2 style={{textAlign: 'center'}}>Register</h2>
      <form 
      style={{
        textAlign: 'center'
        }} 
        onSubmit={handleRegister}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <br />
        <button style={{marginTop: '20px'}} type="submit">Register</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Register;
