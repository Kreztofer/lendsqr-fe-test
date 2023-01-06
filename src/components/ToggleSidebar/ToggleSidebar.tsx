import React, { useState } from 'react';
import './toggleSidebar.scss';
import briefcase from '../../assets/briefcase.png';
import drop from '../../assets/drop.png';
import logout from '../../assets/logout.png';
import dashboard from '../../assets/dashboard.png';
import { CUST, BUS, SET } from '../../constants';
import { Link } from 'react-router-dom';

const ToggleSidebar = () => {
  const [index, setIndex] = useState('Users');
  return (
    <div className="toggle_sidebar">
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
              <Link to="/">
                <div
                  className={
                    slide.desc === index
                      ? 'customers selected-image'
                      : 'customers'
                  }
                  onClick={() => setIndex(slide.desc)}
                >
                  <img src={slide.cover} alt="dashboard" width={19} />
                  <p>{slide.desc}</p>
                </div>
              </Link>
            ) : (
              <div
                className={
                  slide.desc === index
                    ? 'customers selected-image'
                    : 'customers'
                }
                onClick={() => setIndex(slide.desc)}
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
              slide.desc === index ? 'customers selected-image' : 'customers'
            }
            key={i}
            onClick={() => setIndex(slide.desc)}
          >
            <img src={slide.cover} alt="dashboard" width={19} />
            <p>{slide.desc}</p>
          </div>
        ))}
        <h4>SETTINGS</h4>
        {SET.map((slide, i) => (
          <div
            className={
              slide.desc === index ? 'customers selected-image' : 'customers'
            }
            key={i}
            onClick={() => setIndex(slide.desc)}
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

export default ToggleSidebar;
