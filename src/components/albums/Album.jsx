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
        <div>
          <AlbumSlider />
        </div>
      </div>
    </section>
  );
};

export default Album;
