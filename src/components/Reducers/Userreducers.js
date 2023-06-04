const initialState = {
  user: null,
  loginUser: null,
};

const Userreducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGIN_USER":
      return {
        ...state,
        loginUser: action.payload,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        user: null,
        loginUser: null,
      };
    default:
      return state;
  }
};

export default Userreducer;
