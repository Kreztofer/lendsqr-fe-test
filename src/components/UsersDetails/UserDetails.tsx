import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import back from '../../assets/backtousers.png';
import './userDetails.scss';
import { useStateContext } from '../../context/StateContext';
import fullstar from '../../assets/starfull.png';
import halfstar from '../../assets/star.png';
import { LINKS } from '../../constants';
import { UserObj } from '../../models/UserObj';

const UserDetails = () => {
  const userContext = useStateContext();
  const [userDetail, setUserDetail] = useState<UserObj[]>([]);

  const { name } = useParams();
  useEffect(() => {
    let res = JSON.parse(localStorage.getItem('profile')!);
    setUserDetail(res?.filter((item: UserObj) => item?.userName === name));
  }, []);

  let item = { ...userDetail[0]! };
  let email = item?.email;
  let image = item.profile?.avatar;
  let firstName = item.profile?.firstName;
  let lastName = item.profile?.lastName;
  let accountNumber = item?.accountNumber;
  let accountBalance = item?.accountBalance;
  let phoneNumber = item?.phoneNumber;
  let bvn = item.profile?.bvn;
  let gender = item?.profile?.gender;
  let address = item?.profile?.address;
  let level = item?.education?.level;
  let emstatus = item?.education?.employmentStatus;
  let sector = item?.education?.sector;
  let duration = item?.education?.duration;
  let monthIncome1 = item?.education?.monthlyIncome[0];
  let monthIncome2 = item?.education?.monthlyIncome[1];
  let officeEmail = item?.education?.officeEmail;
  let loanRepayment = item?.education?.loanRepayment;
  let twitter = item?.socials?.twitter;
  let facebook = item?.socials?.facebook;
  let instagram = item?.socials?.instagram;
  let gFirstName = item?.guarantor?.firstName;
  let gLastName = item?.guarantor?.lastName;
  let gPhoneNumber = item?.guarantor?.phoneNumber;
  let gAddress = item?.guarantor?.address;
  let gGender = item?.guarantor?.gender;

  const PERSONALDETAILS = [
    {
      id: 1,
      head: 'FULL NAME',
      desc: `${firstName} ${lastName}`,
    },
    {
      id: 2,
      head: 'PHONE NUMBER',
      desc: phoneNumber,
    },
    {
      id: 3,
      head: 'EMAIL ADDRESS',
      desc: email,
    },
    {
      id: 4,
      head: 'BVN',
      desc: bvn,
    },
    {
      id: 5,
      head: 'GENDER',
      desc: gender,
    },
    {
      id: 6,
      head: 'TYPE OF RESIDENCE',
      desc: address,
    },
  ];
  const GUARANTOR = [
    {
      id: 1,
      head: 'FULL NAME',
      desc: `${gFirstName} ${gLastName}`,
    },
    {
      id: 2,
      head: 'PHONE NUMBER',
      desc: gPhoneNumber,
    },
    {
      id: 3,
      head: 'ADDRESS',
      desc: gAddress,
    },
    {
      id: 4,
      head: 'GENDER',
      desc: gGender,
    },
  ];

  const SOCIALS = [
    {
      id: 1,
      head: 'TWITTER',
      desc: twitter,
    },
    {
      id: 2,
      head: 'FACEBOOK',
      desc: facebook,
    },
    {
      id: 3,
      head: 'INSTAGRAM',
      desc: instagram,
    },
  ];

  const EDUCATION = [
    {
      id: 1,
      head: 'LEVEL OF EDUCATION',
      desc: level,
    },
    {
      id: 2,
      head: 'EMPLOYMENT STATUS',
      desc: emstatus,
    },
    {
      id: 3,
      head: 'SECTOR OF EMPLOYMENT',
      desc: sector,
    },
    {
      id: 4,
      head: 'DURATION OF EMPLOYMENT',
      desc: duration,
    },
    {
      id: 5,
      head: 'OFFICE EMAIL',
      desc: officeEmail,
    },
    {
      id: 6,
      head: 'MONTHLY INCOME',
      desc1: monthIncome1,
      desc2: monthIncome2,
    },
    {
      id: 7,
      head: 'LOAN REPAYMENT',
      desc: loanRepayment,
    },
  ];

  return (
    <div className="user_details">
      <div className="back">
        <Link to="/Main">
          <img src={back} alt="" />
        </Link>
        <p>Back to Users</p>
      </div>
      <div className="user_heading">
        <h2>User Details</h2>
        <div className="buttons">
          <p className="blacklist">BLACKLIST USER</p>
          <p className="activate">ACTIVATE USER</p>
        </div>
      </div>
      <div className="user_desc">
        <div className="top_items">
          <img src={image} alt="profile" width={100} height={100} />
          <div className="user_name">
            <p className="names">
              {firstName} {lastName}
            </p>
            <p className="acc_number">{accountNumber}</p>
          </div>
          <div className="user_tier">
            <p>User's Tier</p>
            <div>
              <img src={fullstar} alt="fullstar" />
              <img src={halfstar} alt="halfstar" />
              <img src={halfstar} alt="halfstar" />
            </div>
          </div>
          <div className="user_acc">
            <span>&#8358;</span>
            {accountBalance}
          </div>
        </div>
        <div className="user_links">
          {LINKS.map((item, i) => (
            <p
              className={
                item.desc === userContext?.active
                  ? 'normal_link selected_link'
                  : 'normal_link'
              }
              onClick={() => userContext?.setActive(item?.desc)}
              key={i}
            >
              {item.desc}
            </p>
          ))}
        </div>
      </div>
      <div className="user_info">
        <div className="info">
          <p className="personal">Personal Information</p>
          <div className="user_personal">
            {PERSONALDETAILS?.map((item, i) => (
              <div key={i}>
                <p className="head">{item?.head}</p>
                <p className="desc">{item?.desc}</p>
              </div>
            ))}
          </div>
          <p className="personal pad">Education and Employment</p>
          <div className="user_personal">
            {EDUCATION?.map((item, i) => (
              <div key={i}>
                <p className="head">{item?.head}</p>
                {item?.head === 'MONTHLY INCOME' ? (
                  <p className="desc">
                    <span>&#8358;</span>
                    {item?.desc1}- <span>&#8358;</span>
                    {item?.desc2}
                  </p>
                ) : (
                  <p className="desc">{item?.desc}</p>
                )}
              </div>
            ))}
          </div>
          <p className="personal pad">Socials</p>
          <div className="user_personal">
            {SOCIALS?.map((item, i) => (
              <div key={i}>
                <p className="head">{item?.head}</p>
                <p className="desc">{item?.desc}</p>
              </div>
            ))}
          </div>
          <p className="personal pad">Guarantor</p>
          <div className="user_personal2">
            {GUARANTOR?.map((item, i) => (
              <div key={i}>
                <p className="head">{item?.head}</p>
                <p className="desc">{item?.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
