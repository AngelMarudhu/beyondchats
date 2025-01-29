import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import '../Css/Home.css';
import SetupOrganization from '../Components/SetupOrganization';
import { logout } from '../Redux/LoginSlice';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.login);
  // console.log(user.user.photo)

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="home-container">
      <header className="home-container-header">
        <h3 className="commonButton">{user.user.name}</h3>
        <div>
          <button className="commonButton" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <div>
          {user.user.photo && (
            <img
              className="profile-image commonButton"
              src={user.user.photo}
              alt="Profile"
            />
          )}
        </div>
      </header>

      <section>
        <SetupOrganization />
      </section>
    </div>
  );
};

export default Home;
