"use client";
import AlbumSlider from "./AlbumSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../../varients";
import SectionHeader from "../SectionHeader";
const Album = () => {
  return (
    <section id="discography">
      <div className="container mx-auto">
        <SectionHeader pretitle="Discography" title="Popular Album" />
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <AlbumSlider />
        </motion.div>
      </div>
    </section>
  );
};

export default Album;
