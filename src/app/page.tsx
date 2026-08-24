import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Course from "@/components/Course";
import Curriculum from "@/components/Curriculum";
import StudentWork from "@/components/StudentWork";
import Experience from "@/components/Experience";
import WhySkillUp from "@/components/WhySkillUp";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Course />
        <Curriculum />
        <StudentWork />
        <Experience />
        <WhySkillUp />
        <Testimonials />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
