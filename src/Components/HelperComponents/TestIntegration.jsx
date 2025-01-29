import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import '../../Css/Integration.css';
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useNavigate } from 'react-router';

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
    <div className="testing-container">
      <div className="testing-container-content">
        {showConfetti && <Confetti width={windowWidth} height={windowHeight} />}
        <div className="integration-container-top-buttons">
          <button className="commonButton">Explore Admin Panel</button>
          <button className="commonButton">
            Start Talking To Your Chatbot
          </button>
          <button
            className="commonButton"
            onClick={() => navigate('/integration')}
          >
            🔙
          </button>
        </div>
        <div className="testing-container-content-socials">
          <button>
            <FaFacebook style={{ fontSize: '30px' }} />
          </button>
          <button>
            <FaYoutube style={{ fontSize: '30px' }} />
          </button>
          <button>
            <FaLinkedin style={{ fontSize: '30px' }} />
          </button>
          <button>
            <FaInstagram style={{ fontSize: '30px' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestIntegration;
