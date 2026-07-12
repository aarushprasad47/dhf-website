import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Legacy from "@/components/Legacy";
import Project from "@/components/Project";
import Programs from "@/components/Programs";
import Impact from "@/components/Impact";
import Give from "@/components/Give";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Legacy />
      <Project />
      <Programs />
      <Impact />
      <Give />
      <Contact />
      <Footer />
    </main>
  );
}
