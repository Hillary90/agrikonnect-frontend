import { configureStore } from '@reduxjs/toolkit';
// Import slices here as you create them
import authReducer from '../features/auth/authSlice';
// import postsReducer from '../features/posts/postsSlice';
// etc.

export const store = configureStore({
  reducer: {
    // Add reducers here
    auth: authReducer,
    // posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});


