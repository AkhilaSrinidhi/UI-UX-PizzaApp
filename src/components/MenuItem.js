import React, { useState } from "react";
import { useGlobalContext } from "../pages/context";
import { ReactComponent as SearchIcon } from "../assets/searchicon.svg";
import { pizzaDetails } from "../helpers/PizzaDetails";

function MenuItem({ id, image, name, price, amount }) {
  const { toggleAmount } = useGlobalContext();
  const [showDetails, setShowDetails] = useState(false);

  // Function to toggle the detail box
  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };
  const details = pizzaDetails[id];
  return (
    <div className="menuItem">
      <div className="menuItem-image" style={{ backgroundImage: `url(${image})` }}></div>
      <h2>{name}</h2>
      <p>${price}</p>

      
        <button className="amount-btn amount-btn-dec" onClick={() => toggleAmount(id, "dec")}>-</button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={() => toggleAmount(id, "inc")}>+</button>
        <button className="fact-btn" onClick={handleToggleDetails}>
          <SearchIcon alt="search" />
        </button>
     

      {/* Detail Box */}
      {showDetails && details && (
        <div className="detail-box">
          <h4>Fun Fact:</h4>
          <p>{details.funFact}</p>
          <h4>Nutritional Information:</h4>
          <ul>
            <li>Calories: {details.nutritionalInfo.calories}</li>
            <li>Fat: {details.nutritionalInfo.fat}</li>
            <li>Carbohydrates: {details.nutritionalInfo.carbs}</li>
            <li>Protein: {details.nutritionalInfo.protein}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MenuItem;
