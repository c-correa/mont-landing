
import React from "react";
import gsap from 'gsap-trial/dist/gsap';
import Hero from "@/components/hero/Hero";
import OurTechStack from "@/components/ourTechStack/OurTechStack";
import Management from "@/components/management/Management";
import FocusCollab from "@/components/focusCollab/FocusCollab";
import WorkFlowHub from "@/components/workFlowHub/WorkFlowHub";
import Productivity from "@/components/productivity/productivity";
import Collaboration from "@/components/collaboration/Collaboration";
import Header from "@/components/layout/header/Header";
import { useGSAP } from '@gsap/react';

const Home: React.FC = () => {
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);
  }
  return (
    <div className="w-full h-full">
      <Header />
      <Hero />
      <OurTechStack/>
      <Management/>
      <FocusCollab/>
      <WorkFlowHub/>
      <Productivity/>
      <Collaboration/>
    

      {/* <div className='mt-10 w-full flex justify-center'>
      <OurTechStack />
      </div> */}
<script src="./gsap.min.js"></script>

<script src="./ScrollTrigger.min.js"></script>  
  </div>
  );
};

export default Home;
