import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './reducers/filter'
import contactReducer from './reducers/contact'

const store = configureStore({
  reducer: { contact: contactReducer, filter: filterReducer }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
