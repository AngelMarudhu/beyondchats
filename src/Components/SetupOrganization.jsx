import React from 'react';
import '../Css/Organization.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  setOrganizationDetails,
  setSelectedPage,
} from '../Redux/OrganizationSlice';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const SetupOrganization = () => {
  const navigate = useNavigate();
  const { companyName, companyUrl, companyDescription, pages, selectedPage } =
    useSelector((state) => state.organization);
  const dispatch = useDispatch();
  // console.log(selectedPage);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setOrganizationDetails({ field: name, value: value }));
  };

  const getStatus = (color) => {
    // console.log(color)
    switch (color) {
      case 'Scraped':
        return 'yellow';
      case 'Pending':
        return 'red';
      default:
        return 'black';
    }
  };

  const moveToIntegration = () => {
    navigate('/integration');
  };

  const handleAutoFetchDescription = () => {

    if (!companyUrl || !companyName) {
      alert("Please enter the company name and url");
      return;
    }
    //// basic company url validation buddy

    if (!companyUrl.includes('https://')) {
      alert("Please enter a valid url");
      return;
    }

    const data = "Your company description goes here. This is a sample description.";
    dispatch(setOrganizationDetails({ field: 'companyDescription', value: data }));
  }

  return (
    <div className="setup-organization-container">
      <div className="setup-organization-container-top">
        <section className="setup-organization-container-top-section">
          <h1
            style={{ marginBottom: '1rem', color: 'black', fontSize: '2rem' }}
          >
            Setup Organization
          </h1>
          <input
            type="text"
            placeholder="Organization Name"
            required
            value={companyName}
            onChange={(e) => {
              handleChange(e);
            }}
            name="companyName"
          />
          <input
            type="text"
            placeholder="Organization URL"
            required
            value={companyUrl}
            onChange={(e) => {
              handleChange(e);
            }}
            name="companyUrl"
          />
          <textarea
            style={{ height: '100px' }}
            type="textArea"
            placeholder="Organization Description"
            required
            value={companyDescription}
            onChange={(e) => {
              handleChange(e);
            }}
            onBlur={handleAutoFetchDescription}
            name="companyDescription"
          />
          <div className="setup-organization-container-top-section-buttons">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="commonButton"
              onClick={handleAutoFetchDescription}
            >
              Fetch Data
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="commonButton"
            >
              Setup Your Organization
            </motion.button>
          </div>
        </section>
      </div>

      <div className="setup-organization-container-bottom">
        <section>
          {pages.map((value) => {
            return (
              <div
                key={value.id}
                className={`page-container ${selectedPage?.id === value.id ? 'active' : ''}`}
                onClick={() => dispatch(setSelectedPage(value.id))}
              >
                <div className="page-container-data">
                  <span>{value.url}</span>
                  <span style={{ color: getStatus(value.status) }}>
                    {value.status}
                  </span>
                </div>
              </div>
            );
          })}
        </section>
        <section className="right-section">
          {selectedPage ? (
            <div>
              <h3>{selectedPage.url}</h3>
              <div>
                {selectedPage.data.map((value, index) => {
                  return (
                    <ul key={index}>
                      <li>{value}</li>
                    </ul>
                  );
                })}
              </div>
            </div>
          ) : (
            <h3>No Content Scrapped</h3>
          )}
        </section>
      </div>
      <div className="next-step-button">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={moveToIntegration}
          className="commonButton"
        >
          Move To Integration
        </motion.button>
      </div>
    </div>
  );
};

export default SetupOrganization;
