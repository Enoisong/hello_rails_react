import { configureStore } from "@reduxjs/toolkit";
import greetingReducer from "./Greetings/greetingSlice";

export default configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});
