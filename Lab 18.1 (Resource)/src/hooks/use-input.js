import { useReducer } from "react";

const initialState = {
  value: "",
  isTouch: false,
};

const inputReducer = (state, action) => {
  if (action.type === "CHANGE") {
    return {
      value: action.value,
      isTouch: state.isTouch,
    };
  }
  if (action.type === "BLUR") {
    return {
      value: state.value,
      isTouch: true,
    };
  }
  if (action.type === "RESET") {
    return {
      value: "",
      isTouch: false,
    };
  }
};

const useInput = (validateFn) => {
  const [inputState, dispatch] = useReducer(inputReducer, initialState);

  const isValid = validateFn(inputState.value);
  const hasError = inputState.isTouch && !isValid;

  const inputChangeHandler = (e) => {
    dispatch({ type: "CHANGE", value: e.target.value });
  };
  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };
  const inputResetHandler = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    hasError,
    inputBlurHandler,
    inputChangeHandler,
    inputResetHandler,
  };
};

export default useInput;
