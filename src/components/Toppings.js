// libs
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Toppings = ({ addTopping, pizza }) => {
  const toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <div className="toppings container">
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          const spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <li key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{topping}</span>
            </li>
          );
        })}
      </ul>

      <Link to="/order">
        <button type="button">Order</button>
      </Link>
    </div>
  );
};

Toppings.propTypes = {
  addTopping: PropTypes.func.isRequired,
  pizza: PropTypes.objectOf(PropTypes.object()).isRequired,
};

export default Toppings;
