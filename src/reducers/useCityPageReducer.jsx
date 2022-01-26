import { useCallback, useReducer } from "react";

const useCityPageReducer = (initial = {}) => {
  const reducer = useCallback((state, { type, payload }) => {
    switch (type) {
      case "SET_ITEMS_LIST":
        return { ...state, itemsList: payload };
      case "SET_CHART_DATA":
        return { ...state, chartData: payload };
      case "SET_WEATHER":
        return { ...state, weather: payload };
      default:
        return state;
    }
  }, []);

  const [state, dispatch] = useReducer(reducer, initial);

  return { state, dispatch };
};

export default useCityPageReducer;
