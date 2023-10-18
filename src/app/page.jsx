import Blog from "@/components/blog/Blog";
import Hero from "@/components/Hero";
import Player from "@/components/Player";
import Album from "@/components/albums/Album";
import Events from "@/components/events/Events";
import Image from "next/image";
import Newslatter from "@/components/Newslatter";

export default function Home() {
  return (
    <main>
      <Hero />
      <Player />
      <Events />
      <Album />
      <Blog />
      <Newslatter />
      <div className="h-[4000px]"></div>
    </main>
  );
}
