import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import authSlice from './authSlice'
import { authApi } from './api/authApi'


export const store = configureStore({
  reducer: {userSlice, authSlice, [authApi.reducerPath]: authApi.reducer}, 
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(authApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch