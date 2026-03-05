import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postApi } from "./services/post";
import modalReducer from "./features/modalSlice";

const store = configureStore({
    reducer: {
        [postApi.reducerPath]: postApi.reducer,
        modal: modalReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;