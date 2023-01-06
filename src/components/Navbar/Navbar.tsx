import React, { useState, useContext } from 'react';
import logo from '../../assets/logo.png';
import search from '../../assets/search.png';
import dropdown from '../../assets/dropdown.png';
import profile from '../../assets/profile.png';
import bell from '../../assets/bell.png';
import ham from '../../assets/harmburger.png';
import './navbar.scss';
import { useStateContext } from '../../context/StateContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const userContext = useStateContext();
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <nav className="navbar">
      <div className="nav_left">
        <div className="logo">
          <Link to="/Main">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="search">
          <form
            className="searchbar"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div className="search_group">
              <input
                type="text"
                placeholder="Search for anything"
                onChange={(e) => userContext?.setQuery(e.target.value)}
              />
              <div className="search_icon">
                <img src={search} alt="search-icon" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="nav_right">
        <p className="docs">Docs</p>
        <img src={bell} alt="bell" width={20} height={22.74} />
        <img className="profile" src={profile} alt="profile" />
        <div className="drop">
          <p className="name">Dominic</p>
          <img src={dropdown} alt="dropdown" width={7.34} height={4.15} />
        </div>
      </div>
      <div
        className="show_sidebar"
        onClick={() => userContext?.setShowSideBar((prev) => !prev)}
      >
        <img src={ham} alt="dropdown icon" />
      </div>
    </nav>
  );
};

export default Navbar;
