import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsSlice } from './contactsSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedClicksReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedClicksReducer,
  },
});

export const persistor = persistStore(store);
