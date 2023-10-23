"use client";

import Link from "next/link";
import Socials from "./Socials";
import Nav from "./Nav";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../varients";

const Footer = () => {
  return (
    <footer className="bg-[#030315] action">
      <div className="container mx-auto flex flex-col items-center gap-y-8">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Nav
            containerStyles="flex flex-col xl:flex-row  mt-5 justify-center items-center gap-y-4 xl:gap-x-8 text-sm uppercase font-semibold"
            linkStyles="hover:text-primary/80 transition-all"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Socials
            containerStyles="flex text-[24px] gap-x-8"
            iconStyles="hover:text-primary/80 transition-all justify-center"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Link
            href="#"
            className="relative w-[200px] h-[50px] flex transition-all mb-4 xl:mb-0"
          >
            <Image
              src={"/assets/header/levine.png"}
              fill
              className="object-contain"
              alt=""
            />
          </Link>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
