import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    add(state, action) {
      state.contacts.push(action.payload);
    },
    remove(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.name !== action.payload
      );
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { add, remove, changeFilter } = contactsSlice.actions;
