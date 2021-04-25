export const darkModeReducerDefaultState = false;

const darkModeReducer = (state = darkModeReducerDefaultState, action) => {
  switch (action.type) {
    case "CHANGE_DARKMODE":
      return action.payload;
    default:
      return state;
  }
};
export default darkModeReducer;
