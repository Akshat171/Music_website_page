"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../../varients";
import NavMobile from "./NavMobile";
import Nav from "./Nav";
import Menu from "./Menu";
import Socials from "./Socials";

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed z-50 w-full ${
        active ? "bg-[#030315] py-6 transition-all" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between">
        <Link
          href={"#"}
          className="relative flex w-[226px] h-[37.64px] transition-all mb-4 xl:mb-0"
        >
          <Image
            src={"/assets/header/levine.png"}
            fill
            alt="logo"
            className="object-contain"
          />
        </Link>
        <Nav containerStyles="hidden xl:flex items-center gap-x-8 " />
        <NavMobile />
        <div
          className="absolute right-7  top-9 z-10
        xl:hidden  "
        >
          <Menu />
        </div>

        <Socials
          containerStyles="flex text-[24px] gap-x-4 "
          iconStyles="hover:text-accent transition-all"
        />
      </div>
    </header>
  );
};

export default Header;
