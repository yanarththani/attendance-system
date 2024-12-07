import React from "react";

const HomePage = ({ logout }) => {
    return (
        <div>
            <h1>Welcome to the Home Page </h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default HomePage;
