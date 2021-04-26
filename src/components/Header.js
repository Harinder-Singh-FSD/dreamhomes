import React from "react";
import { motion } from "framer-motion";
const Header = () => {
  const classes = {
    header: {
      backgroundColor: "maroon",
      color: "white",
      // height: "10vh",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 4px 4px maroon",
      // logo: {
      //   margin: "10px",
      // },
    },
  };
  return (
    <header style={classes.header}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1>
            Dream Homes <i class="fas fa-home"></i>
          </h1>
        </div>
        <div>
          <motion.button
            type="button"
            class="btn btn-outline"
            style={{ color: "white", border: "1px solid white" }}
            whileHover={{
              scale: 1.2,
              backgroundColor: "white",
              color: "maroon",
            }}
          >
            Login
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;
