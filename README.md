# attendance-system

# Write a clear and comprehensive ReadMe.md file at the root of the project.

Attendance System is built with React js for the frontend and node js for the backend. The application provides basic user authentication functionality, including login and session management with local storage. User credentials are stored in a users.json file on the backend, where users can log in using their username and password. Upon successful login, users are redirected to a home page, and their session is managed using the browser's local storage. When logged out, the user is redirected to the login page. The app also handles redirection based on the user's authentication status, ensuring a seamless user experience.


Features:
Login Page: Users can log in by entering their username and password.
Home Page: Upon successful login, users are redirected to a home page.
Logout: When logged out, the user is redirected to the login page.

If the user is logged in, they are automatically redirected to the home page. If not, they are redirected to the login page.




02. Include instructions on how to set up and run the project.
Install Backend Dependencies
npm init -y
npm install express cors nodemon body-parser jsonwebtoken fs
# start the server
npm start or node server.js
The backend server will start at http://localhost:3001.


Install Frontend Dependencies
npx create-react-app
npm install axios
npm install react-router-dom 
# start the server
npm start
The frontend server will start at http://localhost:3000.




03. Provide login credentials for testing purposes.
Use the following credentials for testing:

users.json
{
    "username": "admin",
    "password": "admin123"
}
These credentials are stored in the users.json file in the backend directory. 


