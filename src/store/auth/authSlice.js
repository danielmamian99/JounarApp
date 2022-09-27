import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
   name: 'auth',
   initialState: {
        status: 'not-authenticated', //'cheking', 'not-authenticated', 'authenticated'
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
   },
   reducers: {
       login: (state, {payload} ) => {
        state.status = 'authenticated';
        state.displayName = payload.displayName;
        state.email = payload.email;
        state.photoURL = payload.photoURL;
        state.uid = payload.uid;
        state.errorMessage = null;
       },
       logout: (state, {payload} ) => {
        console.log('payload >>>', JSON.stringify(payload, null, 4));
        state.status = 'not-authenticated';
        state.displayName = null;
        state.email = null;
        state.photoURL = null;
        state.uid = null;
        state.errorMessage = payload;
       },
       chekingCredentials: (state) => {
        state.status = 'cheking';
       },
    }
});


export const { login, logout, chekingCredentials } = authSlice.actions;