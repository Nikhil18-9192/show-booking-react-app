export const registerUser = (user) => ({
  type: "REGISTER_USER",
  payload: user,
});

export const loginUser = (token) => ({
  type: "LOGIN_USER",
  payload: token,
});

export const logoutUser = () => ({
  type: "LOGOUT_USER",
});
