import React from "react";
//import logo from "./logo/logo01.jpg";

const HomePage = ({ logout }) => {
    return (
        <div className="home">
        <div className="header">
        <img src={require("./logo/logo01.jpg")} alt="Logo" className="logo" />
          <h1>Student Attendance System</h1>
          
          <button onClick={logout}>Logout</button>
        
        </div >
        <div className="h_main">
        <h2>Welcome to the Home Page </h2>
        <p>This is school system for managing student
        attendance.</p>
        
        </div>
    </div>
    );
};

export default HomePage;
