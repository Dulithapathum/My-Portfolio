import React from "react";
import { Link, useParams } from "react-router-dom";
import { Projects } from "../assets/data";
import { motion } from "framer-motion";
const PortfolioDetails = () => {
  const { id } = useParams();
  const project = Projects.find((proj) => proj.id === parseInt(id));
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full px-5 flex flex-col items-center "
    >
      <h1 className="text-center  font-semibold text-4xl text-second-color capitalize my-10">
        {project.title}
      </h1>
      <div className="flex flex-col lg:flex-row w-full">
        <div className="lg:w-[50%] w-full">
          <div className="p-3 bg-white-alpha-25 rounded-lg border border-white-alpha-40">
            <img
              src={project.img}
              alt={project.title}
              className="w-full  rounded-lg"
            />
          </div>
        </div>
        <div className="lg:w-[50%] w-full mt-5 lg:mt-0 ">
          <ul className="flex  flex-col flex-wrap space-y-4 justify-center h-full ml-6">
            <li className="font-semibold text-xl text-second-color">
              Created -{" "}
              <span className="font-[500] text-lg">{project.Created}</span>
            </li>
            <li className="font-semibold text-xl text-second-color capitalize">
              Technologies used -{" "}
              <span className="font-[500] text-lg ">
                {project.Technologies}
              </span>
            </li>
            <li className="font-semibold text-xl text-second-color">
              Role - <span className="font-[500] text-lg">{project.Role}</span>
            </li>
            <li className="font-semibold text-xl text-second-color flex-wrap break-all">
              View Online -
              <span className="font-[500] text-lg text-main-color hover:text-second-color transition-colors">
                {" "}
                <a href={project.link} target="_blank" className="text-wrap">
                  {project.link}
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-xl font-[500] text-second-color text-justify my-5 break-words ">
        {project.desc}
      </p>
      <Link
        to={`/portfolio/`}
        className="custom-link text-[18px] py-[4px] px-[28px] rounded-[20px] sm:text-[19px]  sm:py-[8px] sm:px-[36px] sm:rounded-[30px]  mb-4 "
      >
        Back
      </Link>
    </motion.div>
  );
};

export default PortfolioDetails;
