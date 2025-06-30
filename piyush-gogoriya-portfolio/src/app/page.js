import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import SkillsCards from "@/components/skillsCards";
import WorkExperience from "@/components/work-experience";
import WorkExperienceNew from "@/components/work-experience-new";
import WorkExperience3 from "@/components/work";

export default function Home() {
  return (
  <>
  {/* <Header /> */}


  <SkillsCards/>
  <WorkExperience3/>
  {/* <WorkExperienceNew/> */}
  {/* <WorkExperience/> */}
    <div className=" bg-gray-900 flex min-h-screen flex-col items-center justify-between p-24">
        <main className="flex flex-col items-center justify-between w-full flex-1 text-center">
          <h1 className="text-4xl font-bold mb-4">Piyush Gogoriya</h1>
          <p className="text-lg mb-8">
            Welcome to my portfolio! I am a software developer with a passion for
            creating innovative solutions. Explore my projects and get to know me
            better.
          </p>
          <a
            href="https://github.com/piyushgogoriya"
            className="text-blue-500 hover:underline"
          >
            View my GitHub
          </a>
        </main>
        
          

    </div>
    <Footer />
  </>
  );
}
