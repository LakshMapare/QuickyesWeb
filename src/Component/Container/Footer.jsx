import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = () => {

  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-teal-800 p-10 mt-20"
    >
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-center gap-8 text-white">
        <div>
          <div className="font-bold mb-6">Get Started</div>
          <p className="text-sm leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            deleniti nostrum odit dolores commodi totam?
          </p>
        </div>
        <div>
          <div className="font-bold mb-6">Services</div>
          <div className="flex flex-col gap-4">
            <a href=" " className="text-sm hover:underline text-white">
              Web Design
            </a>
            <a href=" " className="text-sm hover:underline text-white">
              Web Devlopment
            </a>
            <a href=" " className="text-sm hover:underline text-white">
              Science
            </a>
            <a href=" " className="text-sm hover:underline text-white">
              Digital Marketing
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Company</div>
          <div className="flex flex-col gap-4">
            <a href=" " className="text-sm hover:underline text-white">
              Privacy Policy
            </a>
            <a href=" " className="text-sm hover:underline text-white">
              Sitemap
            </a>
            <a href=" " className="text-sm hover:underline text-white">
              Carriers
            </a>
            <a href=" " className="text-sm hover:underline text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Follow us</div>
          <div className="text-sm mb-4">Quickyes123@gmail.com</div>
          <div className="text-sm ">099226 45700</div>
          <div className="flex gap-4 mt-4">
            <a href=" " className="hover:scale-110 text-xl text-white">
              <BsFacebook />
            </a>
            <a href=" " className="hover:scale-110 text-xl text-white">
              <BsInstagram />
            </a>
            <a href=" " className="hover:scale-110 text-xl text-white">
              <BsTwitter />
            </a>
            <a href=" " className="hover:scale-110 text-xl text-white">
              <BsPinterest />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
