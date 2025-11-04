import { configureStore } from '@reduxjs/toolkit'

import userSlice from './slices/user-slice'
import modalSlice from './slices/modal-slice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    modals: modalSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch