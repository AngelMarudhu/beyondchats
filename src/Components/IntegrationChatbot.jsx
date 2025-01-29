import React, { useState } from 'react';
import '../Css/Integration.css';
import { MessageCircle, X } from 'lucide-react';
import IntegrateWebsite from './HelperComponents/IntegrateWebsite';
import { useNavigate } from 'react-router';

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
        <div className="integration-container-top-buttons">
          <button className="commonButton" onClick={handleTestChatbot}>
            Test ChatBot
          </button>
          <button className="commonButton" onClick={handleIntegration}>
            Integrate Your Website
          </button>
          <button
            className="commonButton"
            onClick={() => navigate('/test-integration')}
          >
            Test Integration
          </button>
          <button className="commonButton" onClick={() => navigate('/home')}>
            🔙
          </button>
        </div>
      </div>

      {integrationOption && <IntegrateWebsite />}
    </div>
  );
};

export default IntegrationChatbot;
