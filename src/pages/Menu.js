import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import MenuIcon from "../assets/menu.png";
import { useGlobalContext } from "../pages/context";

function Menu() {
  const { cart, total, clearCart } = useGlobalContext();
  return (
    <div className="menu">
      <div style={{ display: 'flex', alignItems: 'center' }}>
  <img src={MenuIcon} alt="menu icon" style={{ width: '40px', height: '40px' }} />

  <h1 className="menuTitle">Menu</h1>
</div>

      <div className="menuList">
        {cart.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              id={menuItem.id}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
              ingredients={menuItem.ingredients}
              amount={menuItem.amount}
            />
          );
        })}
      </div>
      <footer className="cart-footer">
        <hr />
        <div className="cart-total">
          <h4>
            Total: <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={clearCart}>
          Clear Cart
        </button>
      </footer>
    </div>
  );
}

export default Menu;
