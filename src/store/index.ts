import { configureStore } from "@reduxjs/toolkit";
//import { setupListeners } from "@reduxjs/toolkit/query";
import sideBarReducer from "./slices/sideBarSlice";
import { authApi } from "./services/authApi";
import userSlice, { setUser } from "./slices/userSlice";
import { contestApi } from "./services/contestApi";
import contestSlice from "./slices/contestSlice";
import { UsersApi } from "./services/userApi";
import { questionApi } from "./services/questionApi";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    sidebar: sideBarReducer,
    user: userSlice,
    contests: contestSlice,
    [authApi.reducerPath]: authApi.reducer,
    [contestApi.reducerPath]: contestApi.reducer,
    [UsersApi.reducerPath]: UsersApi.reducer,
    [questionApi.reducerPath]: questionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(contestApi.middleware)
      .concat(UsersApi.middleware)
      .concat(questionApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

const storedUser = localStorage.getItem("user");

if (storedUser) {
  // Check if storedUser is not null before parsing and dispatching
  try {
    const parsedUser = JSON.parse(storedUser);
    store.dispatch(setUser(parsedUser));
  } catch (error) {
    console.error("Error parsing user data from localStorage:", error);
  }
}
