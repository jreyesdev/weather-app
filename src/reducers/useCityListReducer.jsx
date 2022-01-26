import { useReducer, useCallback } from "react";

const useCityListReducer = (initial = {}) => {
  const reducer = useCallback((state, { type, payload }) => {
    switch (type) {
      case "SET_ALL_WEATHER":
        return { ...state, ...payload };
      default:
        return state;
    }
  }, []);

  const [state, dispatch] = useReducer(reducer, initial);

  return { state, dispatch };
};

export default useCityListReducer;
