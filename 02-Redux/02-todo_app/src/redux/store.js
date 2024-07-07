import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

export default function configureStore() {
  reducer: {
    todos: todoSlice.reducer;
  }
}
