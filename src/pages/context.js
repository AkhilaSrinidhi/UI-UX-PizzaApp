import React, { useContext, useReducer, useEffect } from "react";
import { MenuList } from "../helpers/MenuList";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  cart: MenuList.map(item => ({ ...item, amount: 0 })), // Initialize cart with amount set to 0
  total: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleAmount = (id, type) => {
    console.log('Toggling amount:', id, type);
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleAmount,
        clearCart, // Add clearCart to the context value
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
