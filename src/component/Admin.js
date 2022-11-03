import React, { useState } from "react";
import Home from "./Home";
import {Link, Outlet, redirect} from 'react-router-dom';
const Admin = () => {
  const [login, setLogin] = useState({});
  const [quizState, setQuizState] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    console.log(name, value);
    setLogin((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const onSubmit = () => {  
    if (Object.keys(login).length > 0) {
      if (login.email.includes("@") && login.password.length > 6) {
        setQuizState(true);
        console.log(">??????????????")
        // <Link  to="/Home">Home</Link>
      }
    }
  }
  
  return (
    <div className="col-12 admin-page">
      <header>
        <h2 className="text-center">Quiz Admin Page</h2>
      </header>
      <body className="col-md-12 body">
        <div
          className="col-md-6" style={{display:"flex",justifyContent:"center"}}
        >
          <h4 >Login Page</h4>
        </div>
        <div
          className="col-md-6 loginGrid"
          style={{
            border: "1px solid black",
            borderRadius: "25px",
            padding: "20px",
            backgroundImage:"linear-gradient(to right, red, yellow)"
          }}
        >
          <h2>Admin Login</h2>
          <div className="col-md-12">
            <h4>Email</h4>
            <input
              type="email"
              onChange={(e) => handleChange(e)}
              name="email"
              value={login.email}
            />
            {login.email !== undefined ? (
              login.email.length > 4 && login.email.includes("@") ? null : (
                <i className="icon-close fa fa-close"></i>
              )
            ) : null}
          </div>
          <div className="col-md-12">
            <h4>Password</h4>
            <input
              type="password"
              onChange={(e) => handleChange(e)}
              placeholder="****************"
              name="password"
              value={login.password}
            />
            {login.password !== undefined ? (
              login.password.length > 6 ? null : (
                <i className="icon-close fa fa-close"></i>
              )
            ) : null}
          </div>
          <div className="col-md-12">
            <button onClick={onSubmit} className='btn btn-green'>Login Page</button>
          </div>
        </div>
      </body>
      <footer style={{position:"relative",display:"block"}}>
        {quizState ? <Home /> : null}
      </footer>
      
    </div>
  );
};

export default Admin;
