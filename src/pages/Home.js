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

function Home() {
  return (
    <>
      <Navbar />

      {/* Fix navbar overlap */}
      <div style={{ paddingTop: "90px" }}>
        <Hero />
        <Services />
        <Process />
        <WhyChoose />   
        <Cities />
        <Projects />
        <CTA />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default Home;