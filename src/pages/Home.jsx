import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import ContactSection from "../components/ContactSection";
import { Plane } from "lucide-react";
import Plan from "../pages/Plan";

function Home() {
  return (
    <>
      <Hero />
      <Plan />
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </>
  );
}

export default Home;
