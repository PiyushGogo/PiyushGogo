import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import SkillsCards from "@/components/skillsCards";
import WorkExperience from "@/components/work-experience";
import WorkExperienceNew from "@/components/work-experience-new";
import WorkExperience3 from "@/components/work";
import LetsConnect from "@/components/connect";
import HeroSection from "@/components/main-section";

export default function Home() {
  return (
  <>
  <HeroSection />
  <Header />
  <SkillsCards/>
  <WorkExperience3/>
  {/* <WorkExperienceNew/> */}
  {/* <WorkExperience/> */}
   <LetsConnect/>
    <Footer />
  </>
  );
}
