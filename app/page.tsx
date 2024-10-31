import React from "react";
import Hero from "@/components/hero/Hero";
import Nodejs from "@/public/svg/Nodejs";
import NestJS from "@/public/svg/Nest";
import MongoDB from "@/public/svg/MongoDB";
import Nextjs from "@/public/svg/Next";
import PostgreSQL from "@/public/svg/PostgresSQL";
import AmazonWebServices from "@/public/svg/AmazonWebServices";
import GraphQL from "@/public/svg/GraphQL";
import TypeScript from "@/public/svg/TypeScript";
import TailwindCSS from "@/public/svg/TailwindCSS";
import OurTechStack from "@/components/ourTechStack/OurTechStack";
import Management from "@/components/management/Management";
import FocusCollab from "@/components/focusCollab/FocusCollab";
import WorkFlowHub from "@/components/workFlowHub/WorkFlowHub";
import Productivity from "@/components/productivity/productivity";
import Collaboration from "@/components/collaboration/Collaboration";
const Home: React.FC = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-[80px] border-b-1 border-b border-[#27272A]">
        <p>Header</p>
      </div>
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
    </div>
  );
};

export default Home;
