import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { contactsSlice } from './contactsSlice';

// const persistConfig = {
//     key: 'root',
//     storage,
// }

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
});
