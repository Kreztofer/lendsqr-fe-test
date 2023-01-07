import { useState, useEffect } from 'react';
import './users.scss';
import { HEADING, USERS, MODAL } from '../../constants';
import dots from '../../assets/dots.png';
import ham from '../../assets/harmburger.png';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import Form from '../Form/Form';
import { UserObj } from '../../models/UserObj';

interface props {
  datax: UserObj[];
}

const Users = (datax: props) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [id, setId] = useState('');
  const [status, setStatus] = useState('pending');
  const [statusStyle, setStatusStyle] = useState('pending');
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState(10);

  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [currentItems, setCurrentItems] = useState<UserObj[]>([]);
  const itemsPerPage = 10;

  const [userStatus, setUserStatus] = useState([
    'Blacklisted',
    'Active',
    'Inactive',
    'pending',
    'Active',
    'pending',
    'Inactive',
    'Blacklisted',
    'pending',
    'Active',
  ]);

  const changeStatus = (pos: any, newStatus: any) => {
    let newStatusList = [...userStatus];
    newStatusList[pos] = newStatus;
    setUserStatus(newStatusList);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(datax?.datax.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(100 / itemsPerPage));
  }, [itemOffset, itemsPerPage, datax]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % 100;
    setItemOffset(newOffset);
  };

  const handleDotsClick = (e: any, id: string) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
    setId(id);
  };

  const DateConverter = (date: Date) => {
    return new Date(date).toLocaleString('en-us', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
  };

  const handleModalSelect = (
    value: string,
    myid: string,
    name: any,
    pos: any
  ) => {
    changeStatus(pos, name);

    if (value === 'View Details') {
      navigate(`users/${id}`);
    } else if (value === 'Blacklist User' && myid === id) {
      setStatus('Blacklisted');
      setStatusStyle('blacklist');
    } else if (value === 'Activate User' && myid === id) {
      setStatus('Active');
      setStatusStyle('active');
    } else if (value === 'Unactivate User' && myid === id) {
      setStatus('Inactive');
      setStatusStyle('inactive');
    }
  };

  return (
    <>
      <div className="users">
        <h2 className="heading">Users</h2>
        <div className="users_flex">
          {USERS.map((item, i) => (
            <div className="users_box" key={i}>
              <img src={item.cover} alt="item" width={40} height={40} />
              <p className="user_desc">{item.desc}</p>
              <p className="user_num">{item.num}</p>
            </div>
          ))}
        </div>

        <div className="filter_by" onClick={() => setShowForm((prev) => !prev)}>
          <img src={ham} alt="filter" />
          <p>FILTER BY</p>
        </div>
        {showForm && <Form />}
        <div className="users_details">
          <table className="content-table">
            <thead>
              <tr>
                {HEADING.map((item, i) => (
                  <th key={i}>
                    {item.desc}
                    <img src={item.cover} alt="" width={16} height={10} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentItems?.map((item, index) => (
                <tr
                  key={item?.id}
                  onClick={() => navigate(`users/${item?.userName}`)}
                >
                  <td>{item?.orgName}</td>
                  <td>{item?.userName}</td>
                  <td>{item?.email}</td>
                  <td>{item?.phoneNumber}</td>
                  <td>{DateConverter(item?.createdAt)}</td>
                  <td
                    className={`${
                      userStatus[index] === 'Blacklisted' ? 'blacklist' : ''
                    } 
                    ${userStatus[index] === 'Active' ? 'active' : ''}
                    ${userStatus[index] === 'Inactive' ? 'inactive' : ''}
                    ${userStatus[index] === 'pending' ? 'pending' : ''}`}
                  >
                    {userStatus[index]}
                  </td>
                  <td
                    className="modal_dots"
                    onClick={(e) => handleDotsClick(e, item?.userName)}
                  >
                    <img src={dots} alt="" />
                    <div
                      className={`dropdown-menu ${
                        id === item?.userName && open
                          ? 'drop-active'
                          : 'drop-inactive'
                      }`}
                    >
                      {MODAL.map((value) => (
                        <div
                          className="modal_items"
                          onClick={() =>
                            handleModalSelect(
                              value?.desc,
                              item?.userName,
                              value?.name,
                              index
                            )
                          }
                          key={value.id}
                        >
                          <img
                            src={value.cover}
                            alt=""
                            height={15}
                            width={15}
                          />
                          {value.desc}
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="page_bottom">
          <div className="showing">
            <div className="showing_display">
              <p>Showing</p>
              <select
                className="selector"
                value={filter}
                onChange={(e: any) => setFilter(e.target.value)}
              >
                <option>10</option>
                <option>50</option>
                <option>100</option>
              </select>
            </div>

            <p>Out of 100</p>
          </div>
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={() => null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            activeLinkClassName="active"
          />
        </div>
      </div>
    </>
  );
};

export default Users;
