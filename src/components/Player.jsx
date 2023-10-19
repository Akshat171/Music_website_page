"use client";
import Image from "next/image";
import { AudioPlayer } from "react-audio-play";
import { motion } from "framer-motion";
import { fadeIn } from "../../varients";
const Player = () => {
  return (
    <>
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="bg-gradient-to-r from tertiary/70 to-primary/10 backdrop-blur-[15px] flex items-center relative z-40"
      >
        <div className="container mx-auto flex flex-col justify-between items-center xl:flex-row">
          <div className="hidden w-[300px] xl:flex items-center gap-x-4">
            <div className="relative w-16 h-16 ">
              {" "}
              <Image
                src={"/assets/player/AD_1.jpg"}
                alt="avatar"
                fill
                priority
                className="rounded-3xl"
              />
            </div>
            <div className="leading-none">
              <div className="text-lg font-medium">Adam levine</div>
              <div className="text-sm font-light">This Love</div>
            </div>
          </div>
          <div className="w-full max-w-4xl">
            <AudioPlayer
              loop
              preload="='none"
              color="#fff"
              volume={40}
              volumePlacement="top"
              src="/assets/songs/ThisLove.mp3"
              style={{
                background: "transparent",
                boxShadow: "none",
                width: "100%",
              }}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Player;
