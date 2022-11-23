import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-slice";
import youtubeSlice from "./youtube-slice";
const store = configureStore({
    reducer: {
        Youtube:youtubeSlice.reducer,
        Users : userSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
export default store;