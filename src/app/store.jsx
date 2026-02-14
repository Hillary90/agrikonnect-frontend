import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import authReducer from '../features/auth/authSlice';
import postsReducer from '../features/posts/postsSlice';
import communitiesReducer from '../features/communities/communitiesSlice';
import expertsReducer from '../features/experts/expertsSlice';
import marketplaceReducer from '../features/marketplace/marketplaceSlice';

// Combine reducers for different features
const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
  communities: communitiesReducer,
  experts: expertsReducer,
  marketplace: marketplaceReducer,
});

const createNoopStorage = () => ({
  getItem: async () => null,
  setItem: async () => {},
  removeItem: async () => {},
});

const createBrowserStorage = () => ({
  getItem: async (key) => localStorage.getItem(key),
  setItem: async (key, value) => localStorage.setItem(key, value),
  removeItem: async (key) => localStorage.removeItem(key),
});

const storage = typeof window !== 'undefined' && typeof localStorage !== 'undefined'
  ? createBrowserStorage()
  : createNoopStorage();

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // can add other reducers here if needed
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// configure store with persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for redux-persist
    }),
});

// Create a persistor for the store
export const persistor = persistStore(store);