import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUserData } from "../../actions";
import UploadPhoto from "../../components/UploadPhoto";

function Account() {
  const [user, setUser] = useState({});
  const dispatch = useDispatch()
  useEffect(() => {
    async function fetchMyAPI() {
      const data = await dispatch(getUserData());
      setUser(data);
    }
    fetchMyAPI();
  }, [dispatch]);
  console.log(user)
  return <div className='user-profile'>
    <UploadPhoto/>
      <h5>{user.firstName} {user.lastName}</h5>
  </div>;
}

export default Account;
