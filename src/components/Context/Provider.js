import React, { useReducer } from "react";
import GlobaleContext from "./Createcontext";
import initialstate from "./Inititalstate";
import reducer from "./Reducer";

// create Provider for context
function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <GlobaleContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobaleContext.Provider>
  );
}

export default Provider;
