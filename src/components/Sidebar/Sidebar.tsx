import React, { useState, useContext } from 'react';
import './sidebar.scss';
import briefcase from '../../assets/briefcase.png';
import drop from '../../assets/drop.png';
import logout from '../../assets/logout.png';
import dashboard from '../../assets/dashboard.png';
import { CUST, BUS, SET } from '../../constants';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../context/StateContext';

const Sidebar = () => {
  const userContext= useStateContext();
  return (
    <div className="sidebar">
      <div className="header">
        <div className="switch">
          <img src={briefcase} alt="briefcase" />
          <p>Switch Organization</p>
          <img className="drop" src={drop} alt="drop" />
        </div>
        <div className="dashboard">
          <img src={dashboard} alt="dashboard" />
          <p>Dashboard</p>
        </div>
        <h4>CUSTOMERS</h4>
        {CUST.map((slide, i) => (
          <div key={i}>
            {slide.desc === 'Users' ? (
              <Link to="/Main">
                <div
                  className={
                    slide.desc === userContext?.index
                      ? 'customers selected-image'
                      : 'customers'
                  }
                  onClick={() => userContext?.setIndex(slide.desc)}
                >
                  <img src={slide.cover} alt="dashboard" width={19} />
                  <p>{slide.desc}</p>
                </div>
              </Link>
            ) : (
              <div
                className={
                  slide.desc === userContext?.index
                    ? 'customers selected-image'
                    : 'customers'
                }
                onClick={() => userContext?.setIndex(slide.desc)}
              >
                <img src={slide.cover} alt="dashboard" width={19} />
                <p>{slide.desc}</p>
              </div>
            )}
          </div>
        ))}
        <h4>BUSINESSES</h4>
        {BUS.map((slide, i) => (
          <div
            className={
              slide.desc === userContext?.index ? 'customers selected-image' : 'customers'
            }
            key={i}
            onClick={() => userContext?.setIndex(slide.desc)}
          >
            <img src={slide.cover} alt="dashboard" width={19} />
            <p>{slide.desc}</p>
          </div>
        ))}
        <h4>SETTINGS</h4>
        {SET.map((slide, i) => (
          <div
            className={
              slide.desc === userContext?.index ? 'customers selected-image' : 'customers'
            }
            key={i}
            onClick={() => userContext?.setIndex(slide.desc)}
          >
            <img src={slide.cover} alt="dashboard" width={19} />
            <p>{slide.desc}</p>
          </div>
        ))}
        <hr className="rule" />
        <div className="switch last">
          <img src={logout} alt="logout" width={19} />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
