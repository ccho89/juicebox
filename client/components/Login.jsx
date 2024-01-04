import React, { useState } from "react";
import moonImg from '../images/celestial.jpg'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // Implement the login logic using fetch
  // Send a POST request to server's login endpoint
  // Handle the response, set user state or display error message

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      console.log("Response Status:", response.status);

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Login Error:", errorData.message || "Login failed");
        setError(errorData.message || "Login failed");
        return;
      }

      const data = await response.json();
      console.log("Login Successful:", data);
    } catch (error) {
      console.error("Login Error:", error.message);
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
      <h2 style={{textAlign: 'center'}}>Login</h2>
      <form style={{textAlign: 'center'}} onSubmit={handleLogin}>
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
        <button style={{marginTop: '20px'}} type="submit">Login</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
