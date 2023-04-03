import { configureStore } from "@reduxjs/toolkit";
import flipReducer from "../Slices/flipSwitch";
export default configureStore({
  reducer: {
    flip: flipReducer
  }
});
