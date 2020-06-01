// libs
import React from "react";
import PropTypes from "prop-types";

const Order = ({ pizza }) => {
  return (
    <div className="container order">
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}
    </div>
  );
};

Order.propTypes = {
  pizza: PropTypes.objectOf(PropTypes.object()).isRequired,
};

export default Order;
