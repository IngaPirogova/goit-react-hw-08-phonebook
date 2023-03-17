import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filter/filterSlace';
import { contactsReducer } from './contacts/sliceContacts';
import { authReducer } from './auth/sliceAuth';
import { persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};


export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
   devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
