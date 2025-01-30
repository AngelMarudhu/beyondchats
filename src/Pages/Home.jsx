import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import '../Css/Home.css';
import SetupOrganization from '../Components/SetupOrganization';
import { logout } from '../Redux/LoginSlice';
import { motion } from 'framer-motion';

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
          <motion.button
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="commonButton"
            onClick={handleLogout}
          >
            Logout
          </motion.button>
        </div>
        <div>
          {user.user.photo && (
            <motion.img
              className="profile-image commonButton"
              src={user.user.photo}
              alt="Profile"
              initial={{ x: +100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
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
