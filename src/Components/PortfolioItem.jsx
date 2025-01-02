import React from "react";
import { useNavigate } from "react-router-dom";
const PortfolioItem = ({ item }) => {
  const navigate = useNavigate();

  const viewProject = () => {
    navigate(`/portfolio/project/${item.id}`);
  };
  return (
    <div className="max-w-[300px]  ">
      <div className="p-3 bg-white-alpha-25 rounded-lg border border-white-alpha-40 ">
        <img
          src={item.img}
          alt={item.title}
          className="w-full rounded-lg h-[150px]"
        />
      </div>
      <h1 className="text-lg font-semibold capitalize mt-2  ">{item.title}</h1>
      <button
        className="custom-link py-2 px-6 text-[16px] my-3"
        onClick={viewProject}
      >
        View Project
      </button>
    </div>
  );
};

export default PortfolioItem;
