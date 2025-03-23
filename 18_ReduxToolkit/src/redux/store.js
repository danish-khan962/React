import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})


/*
STEPS:
(i) Create store...
(ii) Wrap app component inside <Provider>
(iii) Create Slice
(iv) Register reducer in store 

*/