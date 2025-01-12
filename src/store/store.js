import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice.js'

// state.counter.value la palabra counter se declara en store.js
// counter hace referencia al archivo counterSlice.js para usar sus variables
const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store;