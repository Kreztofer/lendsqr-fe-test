import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import pablo from '../../assets/pablosign.png';
import logo from '../../assets/logo.png';
import './login.scss';
import { useStateContext } from '../../context/StateContext';

const Login = () => {
  const userContext= useStateContext();
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState('SHOW');

  const handleUserLogin = () => {
    localStorage.setItem('login', 'logged');
    userContext?.setUser(localStorage.getItem('login')??'');
  };
  const handleToggle = () => {
    if (type === 'password') {
      setIcon('HIDE');
      setType('text');
    } else {
      setIcon('SHOW');
      setType('password');
    }
  };
  const navigate = useNavigate();
  const handleSubmit = (e:any) => {
    e.preventDefault();
    navigate('/Main');
  };
  return (
    <div className="login container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="login_content">
        <div className="login_banner">
          <img src={pablo} alt="banner" width={600} />
        </div>
        <div className="login_form">
          <h1>Welcome!</h1>
          <h3>Enter details to login.</h3>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form_group">
              <input
                type="text"
                className="form_control"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="form_group">
              <input
                type={type}
                className="form_control"
                name="password"
                placeholder="Password"
              />
              <span onClick={handleToggle} className="toggle_icon">
                {icon}
              </span>
            </div>
            <p>FORGOT PASSWORD?</p>
            <button
              onClick={() => handleUserLogin()}
              type="submit"
              className="login_btn"
            >
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
