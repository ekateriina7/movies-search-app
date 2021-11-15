import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
import { getUserData } from "../../actions";
import UploadPhoto from "../../components/UploadPhoto";
import "./Profile.scss";
import Loader from "../../components/Loader";

function Account() {
  const [user, setUser] = useState({});
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchMyAPI() {
      const data = await dispatch(getUserData());
      setUser(data);
    }
    fetchMyAPI();
  }, [dispatch]);
  const date = moment.unix((user.dateOfBirth)/1000).format("DD/MM/YYYY");
  return (
    <div className="user-profile container">
      {state.loading && <Loader/>}
      <div className="userInfo">
        <div className="userInfo__pic">
          <img src={user.photo||'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} alt="avatar" />
        </div>
        <h5>
          Name: {user.firstName} {user.lastName}
        </h5>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Gender: {user.gender}</p>
        <p>Date of birth: {date}</p>
      </div>
      <UploadPhoto />
    </div>
  );
}

export default Account;