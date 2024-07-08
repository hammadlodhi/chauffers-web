import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type WebApplicationState = {
    loader: {
        visible: boolean;
        tasks: string[];
    };
};

const initialState: WebApplicationState = {
    loader: {
        visible: false,
        tasks: [],
    },
};

const slice = createSlice({
    name: 'WEB_APPLICATION',
    initialState,
    reducers: {
        showLoader: (state) => {
            state.loader.visible = true;
        },
        hideLoader: (state) => {
            state.loader.visible = false;
        },
        addTask: (state, action: PayloadAction<{id: string}>) => {
            state.loader.tasks.push(action.payload.id);
        },
        removeTask: (state, action: PayloadAction<{id: string}>) => {
            state.loader.tasks = state.loader.tasks.filter((task) => task !== action.payload.id);
        },
    },
});

export const webApplicationActions = slice.actions;

export const webApplicationReducer = slice.reducer;
export const {showLoader, hideLoader} = slice.actions;

export const selectWebApplication = (state: RootState) => state.webApplicationReducer;
