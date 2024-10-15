import Image from "next/image";
import Animation from "@/components/Animation";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      {/* <Animation /> */}
      <Intro/>
      <Projects/>
      <Contact/>
    </div>
  );
}
