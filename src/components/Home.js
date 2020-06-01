// libs
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div className="home container" animate={{}}>
      <h2 animate={{ fontSize: 50 }}>Welcome to Pizza Motion</h2>
      <Link to="/base">
        <motion.button type="button" animate={{}}>
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
