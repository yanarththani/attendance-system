import React, { useState } from "react";
import axios from "axios";
//import logo from "./logo/logo01.jpg";
const LoginPage = ({ setToken }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

   /*01*/  const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3002/login", { username, password });
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
        } catch (err) {
            setError("Invalid username or password");
        }
    };

    return (
        <div>
            <div className="header">
            <img src={require("./logo/logo01.jpg")} alt="Logo" className="logo" /> 
             <h1>Student Attendance System</h1>
            </div>
            <div className="main">
            <h1>Login</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleLogin}>
              <div className="input_box">
              <label>Username</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
              </div>
              <div className="input_box">
              <label>Password</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
                <button type="submit">Login</button>
            </form>
        </div>
        </div>
    );
};

export default LoginPage;