import React ,{useContext}from 'react';
import './form.scss';
import { useStateContext } from '../../context/StateContext';

const Form = () => {
  const userContext= useStateContext();
  return (
    <div className="form">
      <div className="form_details">
        <form>
          <div>
            <label>Organization</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Select"
              onChange={(e) =>userContext?.setQuery(e.target.value)}
            />
          </div>
          <div>
            <label>Username</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="User"
              onChange={(e) =>userContext?.setQuery(e.target.value)}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Email"
              onChange={(e) =>userContext?.setQuery(e.target.value)}
            />
          </div>
          <div>
            <label>Date</label>
            <input
              type="date"
              className="date"
              name=""
              id=""
              placeholder="Date"
              onChange={(e) =>userContext?.setQuery(e.target.value)}
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Phone Number"
              onChange={(e) => userContext?.setQuery(e.target.value)}
            />
          </div>
          <div>
            <label>Status</label>
            <select name="" id="">
              <option disabled value="">
                Select
              </option>
              <option value="active">Active</option>
              <option value="active">Inactive</option>
              <option value="active">Blacklisted</option>
            </select>
          </div>
        </form>
        <div className="form_buttons">
          <p onClick={() => userContext?.setQuery('')} className="reset">
            Reset
          </p>
          <p className="filter">Filter</p>
        </div>
      </div>
    </div>
  );
};

export default Form;
