import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    language: 'tr',
    theme: 'dark',
};


const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
        setTheme: (state, action) => {
            state.theme = action.payload;
        }
    },
});

export const { setLanguage , setTheme} = globalSlice.actions;
export default globalSlice.reducer;