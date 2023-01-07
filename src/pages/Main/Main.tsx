import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Navbar,
  Sidebar,
  Users,
  UsersDetails,
  ToggleSidebar,
} from '../../components';
import axios from 'axios';
import './main.scss';
import { useStateContext } from '../../context/StateContext';
import { UserObj } from '../../models/UserObj';

const Main = () => {
  const userContext = useStateContext();
  const [data, setData] = useState([]);
  const [myData, setMyData] = useState<UserObj[]>([]);

  let datax = myData;
  interface props {
    datax: UserObj[];
  }
  const search = ({ datax }: props) => {
    return datax?.filter(
      (item: UserObj) =>
        item.orgName.toLowerCase().includes(userContext?.query!) ||
        item.userName.toLowerCase().includes(userContext?.query!) ||
        item.phoneNumber.toLowerCase().includes(userContext?.query!) ||
        item.email.toLowerCase().includes(userContext?.query!)
    );
  };

  useEffect(() => {
    if (localStorage.getItem('profile')) {
      setMyData(JSON.parse(localStorage.getItem('profile')!));
    } else {
      axios
        .get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
        .then((response) => {
          setData(response?.data);
          window.localStorage.setItem(
            'profile',
            JSON.stringify(response?.data)
          );
          setMyData(JSON.parse(localStorage.getItem('profile')!));
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [data]);

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        {userContext?.showSideBar && <ToggleSidebar />}
        <Routes>
          <Route path="/" element={<Users datax={search({ datax })} />} />
          <Route path="/users/:name" element={<UsersDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
