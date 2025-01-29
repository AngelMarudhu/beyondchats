import React from 'react';
import '../Css/Organization.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  setOrganizationDetails,
  setSelectedPage,
} from '../Redux/OrganizationSlice';
import { useNavigate } from 'react-router';

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
            name="companyDescription"
          />
          <div className="setup-organization-container-top-section-buttons">
            <button className="commonButton">Fetch Data</button>
            <button className="commonButton">Setup Your Organization</button>
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
        <button onClick={moveToIntegration} className="commonButton">
          Move To Integration
        </button>
      </div>
    </div>
  );
};

export default SetupOrganization;
