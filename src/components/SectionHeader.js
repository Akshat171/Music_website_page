"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../../varients";
const SectionHeader = ({ pretitle, title }) => {
  return (
    <header>
      <motion.h3
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="pretitle text-center"
      >
        {pretitle}
      </motion.h3>
      <motion.h4
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="h2 text-center mb-8"
      >
        {title}
      </motion.h4>
    </header>
  );
};

export default SectionHeader;
