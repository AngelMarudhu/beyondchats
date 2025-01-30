import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import '../../Css/Integration.css';
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';

const TestIntegration = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    const confettiOff = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(confettiOff);
    };
  }, []);

  return (
    <motion.div
      className="testing-container"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeIn' }}
    >
      <div className="testing-container-content">
        <AnimatePresence>
          {showConfetti && (
            <motion.div exit={{ opacity: 0, transition: { duration: 1 } }}>
              <Confetti width={windowWidth} height={windowHeight} />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.h3
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ textAlign: 'center' }}
        >
          🎉 Integration Successful! 🎉
        </motion.h3>

        <div className="integration-container-top-buttons">
          <motion.button
            className="commonButton"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Explore Admin Panel
          </motion.button>
          <motion.button
            className="commonButton"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Start Talking To Your Chatbot
          </motion.button>
          <motion.button
            className="commonButton"
            onClick={() => navigate('/integration')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            🔙
          </motion.button>
        </div>
        <div className="testing-container-content-socials">
          {/* no repeatation button element just map them  */}
          {[
            { icon: <FaFacebook />, color: '#1877F2' },
            { icon: <FaYoutube />, color: '#FF0000' },
            { icon: <FaLinkedin />, color: '#0077B5' },
            { icon: <FaInstagram />, color: '#E4405F' },
          ].map((item, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              style={{
                fontSize: '30px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: item.color,
              }}
            >
              {item.icon}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TestIntegration;
