import { useCallback, useReducer } from "react";

const httpReducer = (state, action) => {
  if (action.type === "SEND") {
    return {
      status: "pending",
      data: state.data,
      error: state.error,
    };
  }
  if (action.type === "SUCCESS") {
    return {
      status: "completed",
      data: action.data,
      error: null,
    };
  }
  if (action.type === "ERROR") {
    return {
      status: "completed",
      data: state.data,
      error: action.errorMessage,
    };
  }
};

const useHttp = (requestFn, startWithPending = false) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? "pending" : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async (requestData) => {
      dispatch({ type: "SEND" });
      try {
        const data = await requestFn(requestData);
        dispatch({ type: "SUCCESS", data });
      } catch (error) {
        dispatch({
          type: "ERROR",
          errorMessage: error.message || "Something went wrong!",
        });
      }
    },
    [requestFn]
  );
  return {
    sendRequest,
    ...httpState,
  };
};

export default useHttp;
