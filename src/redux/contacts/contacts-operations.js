import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import openNotificationWithIcon from 'components/Notification';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');

      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
const createContact = createAsyncThunk(
  'contacts/create',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);

      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (contactId, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      openNotificationWithIcon('success', 'Contact deleted successfully!');
      return contactId;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
const operations = {
  fetchContacts,
  createContact,
  deleteContact,
};
export default operations;
