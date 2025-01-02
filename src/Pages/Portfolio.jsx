import React from "react";
import { Projects } from "../assets/data";
import PortfolioItem from "../Components/PortfolioItem";
const Portfolio = () => {
  return (
    <section>
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
    </section>
  );
};

export default Portfolio;
