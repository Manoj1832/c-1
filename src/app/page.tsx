import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Stats from "@/components/sections/Stats";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Stats />
        <BeforeAfter 
          beforeImage="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop"
          afterImage="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1000&auto=format&fit=crop"
          title="Make Your Smile Shine Again"
          subtitle="Dental Practice"
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
