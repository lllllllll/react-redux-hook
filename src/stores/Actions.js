export const fetchCounter = type => dispatch => {
  switch (type) {
    case "+":
      dispatch({
        type: "INCREMENT",
        payload: "Counter INCREMENT"
      });
      break;
    case "-":
      dispatch({
        type: "DECREMENT",
        payload: "Counter DECREMENT"
      });
      break;
    default:
      break;
  }
};
