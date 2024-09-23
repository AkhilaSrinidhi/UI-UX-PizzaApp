const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };

      case "TOGGLE_AMOUNT":
        const updatedCart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            if (action.payload.type === "inc") {
              return { ...item, amount: item.amount + 1 };
            }
            if (action.payload.type === "dec" && item.amount > 0) {
              return { ...item, amount: item.amount - 1 };
            }
          }
          return item;
        });
        console.log('Updated Cart:', updatedCart); // Ensure the cart is updated correctly
        return { ...state, cart: updatedCart };

        case "GET_TOTALS":
          const { total, amount } = state.cart.reduce(
            (cartTotal, cartItem) => {
              const { price, amount } = cartItem;
              const itemTotal = price * amount;
    
              cartTotal.total += itemTotal;
              cartTotal.amount += amount;
              return cartTotal;
            },
            {
              total: 0,
              amount: 0,
            }
          );
    
          return { ...state, total, amount };

          case "CLEAR_CART":
            return {
              ...state,
              cart: state.cart.map(item => ({ ...item, amount: 0 })), // Reset all amounts to 0
            };

    default:
      return state;
  }
};

export default reducer;
