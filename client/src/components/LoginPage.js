import React, { useState } from "react";
import axios from "axios";

const LoginPage = ({ setToken }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    

        const handleLogin = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:3001/login");
    };

    return (
        <div className="main">
            <h1>Login</h1>
            
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
    );
};

export default LoginPage;