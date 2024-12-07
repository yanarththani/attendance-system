import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import './App.css';

const App = () => {
    const [token, setToken] = useState(localStorage.getItem("token"));

    const logout = () => {
        setToken(null);
        localStorage.removeItem("token");
    };

    return (
        <BrowserRouter>
            <Routes>
                {/* Login Page */}
                <Route 
                    path="/" 
                    element={token ? <Navigate to="/home" /> : <LoginPage setToken={setToken} />} 
                />

                {/* Home Page */}
                <Route 
                    path="/home" 
                    element={token ? <HomePage logout={logout} /> : <Navigate to="/" />} 
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

