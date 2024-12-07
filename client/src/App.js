import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import './App.css';

const App = () => {
    const [token, setToken] = useState(localStorage.getItem("token"));

   
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/" 
                    element={token ? <Navigate to="/home" /> : <LoginPage setToken={setToken} />} 
                />

                <Route 
                    path="/home" 
                    element={token ? <HomePage/> : <Navigate to="/" />} 
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

