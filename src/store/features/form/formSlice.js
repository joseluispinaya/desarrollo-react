import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    formData: {
        module: 'React Mod7',
        username: '',
        email: '',
        password: 'mod7USIP-JOSE'
    }
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateFormData: (state, action) => {
            const { name, value } = action.payload;
            state.formData[name] = value;
        },
        resetForm: (state) => {
            state.formData = { ...initialState.formData };
        },
        limpiarFormData: (state) => {
            state.formData = {
                module: '',
                username: '',
                email: '',
                password: ''
            };
        }
    }
});

export const { updateFormData, resetForm, limpiarFormData } = formSlice.actions;

export default formSlice.reducer;