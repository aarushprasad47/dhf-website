import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import QuickNav from "@/components/QuickNav";
import AboutTeaser from "@/components/AboutTeaser";
import Project from "@/components/Project";
import Perspectives from "@/components/Perspectives";
import Connects from "@/components/Connects";
import Concept from "@/components/Concept";
import Programs from "@/components/Programs";
import Budget from "@/components/Budget";
import Impact from "@/components/Impact";
import Give from "@/components/Give";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <QuickNav />
      <AboutTeaser />
      <Project />
      <Perspectives />
      <Connects />
      <Concept />
      <Programs />
      <Budget />
      <Impact />
      <Give />
      <Contact />
      <Footer />
    </main>
  );
}
