// write a reducer function to handle the actions
function reducer(state, action) {
  switch (action.type) {
    case "toggle":
      return {
        ...state,
        toggle: action.payload,
      };
    case "show":
      return {
        ...state,
        show: action.payload,
      };
    case "booking":
      return {
        ...state,
        booking: action.payload,
      };
    case "booked":
      return {
        ...state,
        bookedSeat: action.payload,
      };
    default:
      return state;
  }
}
export default reducer;
