import React from "react";
import { Projects } from "../assets/data";
import PortfolioItem from "../Components/PortfolioItem";
import { motion } from "framer-motion";
const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h1 className="text-center  font-semibold text-4xl text-blue-dark capitalize my-10">
          Recent Work
        </h1>
        <div className=" flex flex-wrap justify-evenly ">
          {Projects.map((item) => (
            <PortfolioItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
