// libs
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <div className="base container">
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          const spanClass = pizza.base === base ? "active" : "";
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </li>
          );
        })}
      </ul>

      {pizza.base && (
        <div className="next">
          <Link to="/toppings">
            <button type="button">Next</button>
          </Link>
        </div>
      )}
    </div>
  );
};

Base.propTypes = {
  addBase: PropTypes.func.isRequired,
  pizza: PropTypes.object.isRequired,
};

export default Base;
