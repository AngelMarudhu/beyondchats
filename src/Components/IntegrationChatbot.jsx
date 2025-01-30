import React, { useState } from 'react';
import '../Css/Integration.css';
import IntegrateWebsite from './HelperComponents/IntegrateWebsite';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const IntegrationChatbot = () => {
  const navigate = useNavigate();
  const [integrationOption, setIntegrationOption] = useState(false);

  const handleTestChatbot = () => {
    const chatbotPage = window.open('https://example.com', '_blank');
  };

  const handleIntegration = () => {
    setIntegrationOption(!integrationOption);
  };

  return (
    <div className="integration-container">
      <h1 style={{ textAlign: 'center', marginTop: '10px' }}>
        ChatBot Integrations
      </h1>
      <div className="integration-container-top">
        <motion.div
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="integration-container-top-buttons"
        >
          <motion.button
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="commonButton"
            onClick={handleTestChatbot}
          >
            Test ChatBot
          </motion.button>
          <motion.button
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="commonButton"
            onClick={handleIntegration}
          >
            Integrate Your Website
          </motion.button>
          <motion.button
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 0.9 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="commonButton"
            onClick={() => navigate('/test-integration')}
          >
            Test Integration
          </motion.button>
          <motion.button
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="commonButton"
            onClick={() => navigate('/home')}
          >
            🔙
          </motion.button>
        </motion.div>
      </div>

      {integrationOption && <IntegrateWebsite />}
    </div>
  );
};

export default IntegrationChatbot;
