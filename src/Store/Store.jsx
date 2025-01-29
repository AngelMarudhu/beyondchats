import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../Redux/LoginSlice.jsx';
import organizationSlice from '../Redux/OrganizationSlice.jsx';

export const store = configureStore({
  reducer: {
    login: loginSlice,
    organization: organizationSlice,
  },
});
