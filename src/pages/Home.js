import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/Process";
import WhyChoose from "../components/WhyChoose";
import Cities from "../components/Cities";
import Projects from "../components/Projects";
import CTA from "../components/CTA";
import About from "../components/About";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";


function Home() {
  return (
    <>
      <Navbar />

      <div className="pb-24 md:pb-0 overflow-x-hidden">
        <Hero />
        <Services />
        <Process />
        <WhyChoose />   
        <Cities />
        <Projects />
        <CTA />
        <About />
        <Footer />
        <MobileNav />
      </div>
    </>
  );
}

export default Home;
