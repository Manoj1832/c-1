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
          beforeImage="https://www.32dentalcare.org/wp-content/uploads/2022/12/man-showing-his-teeth3-YUFNXWG.jpg"
          afterImage="https://www.32dentalcare.org/wp-content/uploads/2022/12/man-showing-his-teeth4-YUFNXWG.jpg"
          title="Make Your Smile Shine Again"
          subtitle="Dental Practice"
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
