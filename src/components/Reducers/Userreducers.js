const initialState = {
  user: null,
  token: null,
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
        token: action.payload,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};

export default Userreducer;
