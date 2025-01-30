import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage.jsx';
import Home from './Pages/Home.jsx';
import ProtectedRoute from './CustomHook/ProtectedRoute.jsx';
import IntegrationChatbot from './Components/IntegrationChatbot.jsx';
import TestIntegration from './Components/HelperComponents/TestIntegration.jsx';

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/integration"
          element={
            <ProtectedRoute>
              <IntegrationChatbot />
            </ProtectedRoute>
          }
        />

        <Route
          path="/test-integration"
          element={
            <ProtectedRoute>
              <TestIntegration />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
