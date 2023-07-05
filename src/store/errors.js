import { createSlice } from "@reduxjs/toolkit";

const initialState = { entities: [] };

const errorsSlice = createSlice({
    name: "error",
    initialState,
    reducers: {
        set(state, action) {
            state.entities = action.payload;
        },
    },
});
const { actions, reducer: errorReducer } = errorsSlice;

const { set } = actions;
export const setError = (message) => (dispatch) => {
    dispatch(set(message));
};
export const getErrors = () => (state) => state.errors?.entities[0];

export default errorReducer;
