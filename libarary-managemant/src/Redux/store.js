import { configureStore } from '@reduxjs/toolkit';
// import authReducer,{loadToken} from './slices/authslice';
import authReducer from './slices/authslice';

const store = configureStore({
    reducer: {
        auth: authReducer
    },
});
// store.dispatch(loadToken()); 
export default store;
