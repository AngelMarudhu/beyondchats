import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  companyName: '',
  companyUrl: '',
  companyDescription: '',

  pages: [
    {
      id: 1,
      url: 'https://example.com/home',
      status: 'Scraped',
      data: ['Welcome to Example', 'Best Services'],
    },
    { id: 2, url: 'https://example.com/about', status: 'Pending', data: [] },
    {
      id: 3,
      url: 'https://example.com/contact',
      status: 'Scraped',
      data: ['Contact us at email@example.com'],
    },
  ],
  selectedPage: null,
};

export const organizationSlice = createSlice({
  name: 'organization',
  initialState,

  reducers: {
    setOrganizationDetails: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
      // console.log(state)
    },

    setSelectedPage: (state, action) => {
      state.selectedPage = state.pages.find(
        (page) => page.id === action.payload
      );
    },
  },
});

export const { setOrganizationDetails, setSelectedPage } =
  organizationSlice.actions;

export default organizationSlice.reducer;
