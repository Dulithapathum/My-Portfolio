import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
} from "react-icons/fa";
import { UserProfile } from "../assets/data";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full  h-[80%]"
    >
      <h1 className="text-center  font-semibold text-4xl text-blue-dark capitalize my-10">
        Contact me
      </h1>
      <div className="w-full flex flex-col  items-center lg:items-stretch justify-evenly lg:flex-row px-4 h-full  ">
        <form className="w-full lg:w-[50%] px-8  flex-col justify-evenly space-y-3  flex  mb-6 lg:mb-0 ">
          <div>
            <input
              type="text"
              placeholder="Name "
              required
              className="w-full outline-none h-[50px] rounded-[25px] text-[16px] text-blue-dark bg-white-alpha-25 border-white-alpha-40 border-[1px] font-[400] placeholder:text-blue-dark placeholder:opacity-[0.3] px-[20px] hover:shadow-md hover:shadow-white-alpha-25 transition-all duration-300"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full outline-none h-[50px] rounded-[25px] text-[16px] text-blue-dark bg-white-alpha-25 border-white-alpha-40 border-[1px] font-[400] placeholder:text-blue-dark placeholder:opacity-[0.3] px-[20px] hover:shadow-md hover:shadow-white-alpha-25 transition-all duration-300"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Subject"
              required
              className="w-full outline-none h-[50px] rounded-[25px] text-[16px] text-blue-dark bg-white-alpha-25 border-white-alpha-40 border-[1px] font-[400] placeholder:text-blue-dark placeholder:opacity-[0.3] px-[20px] hover:shadow-md hover:shadow-white-alpha-25 transition-all duration-300"
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              required
              className="w-full outline-none h-[200px] resize-none rounded-[25px] pt-3 text-[16px] text-blue-dark bg-white-alpha-25 border-white-alpha-40 border-[1px] font-[400] placeholder:text-blue-dark placeholder:opacity-[0.3] px-[20px] hover:shadow-md hover:shadow-white-alpha-25 transition-all duration-300"
            ></textarea>
          </div>
          <div>
            <button type="submit" className="custom-link py-2 lg:-mt-2">
              Send message
            </button>
          </div>
        </form>
        <div className="w-full lg:w-[50%] px-8 flex flex-col gap-5   lg:mt-5 ">
          <div className="flex flex-col ">
            <h3 className="font-[500] text-2xl">Email :</h3>
            <p className="text-xl font-[400] text-blue-dark mt-1">
              {UserProfile.email}
            </p>
          </div>
          <div className="flex flex-col ">
            <h3 className="font-[500] text-2xl">Contact Number :</h3>
            <p className="text-xl font-[400] text-blue-dark mt-1">
              {UserProfile.PhoneNo}
            </p>
          </div>
          <div className="flex flex-col   ">
            <h3 className="font-[500] text-2xl">Follow Me :</h3>
            <div className="flex items-center gap-2  flex-wrap  w-[100%] lg:w-[70%] my-3">
              <a
                href={UserProfile.social[0]}
                target="_blank"
                className="min-w-[45px] min-h-[45px] bg-white-alpha-25 text-main-color rounded-[50%] border-2 border-white-alpha-40 text-[20px] inline-flex items-center justify-center hover:bg-main-color hover:text-white transition-colors duration-300"
              >
                <FaWhatsapp />
              </a>
              <a
                href={UserProfile.social[1]}
                target="_blank"
                className="min-w-[45px] min-h-[45px] bg-white-alpha-25 text-main-color rounded-[50%] border-2 border-white-alpha-40 text-[20px] inline-flex items-center justify-center hover:bg-main-color hover:text-white transition-colors duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href={UserProfile.social[2]}
                target="_blank"
                className="min-w-[45px] min-h-[45px] bg-white-alpha-25 text-main-color rounded-[50%] border-2 border-white-alpha-40 text-[20px] inline-flex items-center justify-center hover:bg-main-color hover:text-white transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href={UserProfile.social[3]}
                target="_blank"
                className="min-w-[45px] min-h-[45px] bg-white-alpha-25 text-main-color rounded-[50%] border-2 border-white-alpha-40 text-[20px] inline-flex items-center justify-center hover:bg-main-color hover:text-white transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href={UserProfile.social[4]}
                target="_blank"
                className="min-w-[45px] min-h-[45px] bg-white-alpha-25 text-main-color rounded-[50%] border-2 border-white-alpha-40 text-[20px] inline-flex items-center justify-center hover:bg-main-color hover:text-white transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a
                href={UserProfile.social[5]}
                target="_blank"
                className="min-w-[45px] min-h-[45px] bg-white-alpha-25 text-main-color rounded-[50%] border-2 border-white-alpha-40 text-[20px] inline-flex items-center justify-center hover:bg-main-color hover:text-white transition-colors duration-300"
              >
                <FaStackOverflow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
