import React from "react";
import Frameicon from "@/public/svg/Frameicon";
import FrameiconTime from "@/public/svg/FrameiconTime";
import FrameiconAsterisk from "@/public/svg/FrameiconAsterisk";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => (
  <div className="bg-[#141416] rounded-xl p-4 flex flex-col items-center w-full sm:w-80 h-64"> {/* Set a fixed height for uniformity */}
    <figure className="border border-1 border-[#27272A] w-min p-2 rounded-[50%]">
      {icon}
    </figure>
    <div className="text-center flex-grow"> {/* Allow the text container to grow and fill space */}
      <h2 className="text-[#FAFAFA]">{title}</h2>
      <p className="text-dark-text-tertiary opacity-50">{description}</p>
    </div>
  </div>
);

const WorkFlowHub: React.FC = () => {
  return (
    <section className="py-14 md:py-[72px] flex flex-col items-center gap-10 relative">
      <div className="flex justify-center items-center bg-[#1FDD8A]/10 rounded-[20px] ">
        <p className="text-dark-text-tertiary opacity-50 p-2">Colaboración</p>
      </div>
      <div>
        <h2 className="text-center tracking-tight !text-[#FAFAFA]">
        Seamless Collaboration, Enhanced Productivity
        </h2>
        <p className="text-center !text-[#FAFAFA] opacity-50">
        Empower your team with integrated tools for file sharing, task management, and real-time collaboration, ensuring smooth project workflows from start to finish.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 max-w-full w-full justify-center p-1">
        <Card
          icon={<Frameicon width={24} height={24} fill="white" />}
          title="Sprint Planning"
          description="Plan and execute project tasks efficiently within iterative sprint cycles."
        />
        <Card
          icon={<FrameiconTime width={24} height={24} fill="white" />}
          title="Kanban Boards"
          description="Visualize project workflow and track task progress with customizable Kanban boards."
        />
        <Card
          icon={<FrameiconAsterisk width={24} height={24} fill="white" />}
          title="Task Prioritization"
          description="Prioritize tasks based on urgency and importance to ensure efficient use of resources."
        />
      </div>
    </section>
  );
};

export default WorkFlowHub;
