import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../Reducers/index";

const Configurestore = () => {
  const store = configureStore({
    reducer: rootReducer,
    // Add middleware or other store configuration options here if needed
  });
  return store;
};

export default Configurestore;
