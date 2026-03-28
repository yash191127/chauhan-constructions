import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import Cities from "../components/Cities";
import Projects from "../components/Projects";
import CTA from "../components/CTA";

function Home() {
  return (
    <>
      <Navbar />

      {/* Fix navbar overlap */}
      <div style={{ paddingTop: "90px" }}>
        <Hero />
        <Services />
        <WhyChoose />   
        <Cities />
        <Projects />
        <CTA />
      </div>
    </>
  );
}

export default Home;