import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ModalProps } from "./types";

const initialState: ModalProps = {
    isOpen: false,
    id: null,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<number>) => {
            state.isOpen = true;
            state.id = action.payload;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.id = null;
        }
    }
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;