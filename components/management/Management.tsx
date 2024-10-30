import React from "react";
import Frameicon from "@/public/svg/Frameicon";
import FrameiconTime from "@/public/svg/FrameiconTime";
import FrameiconGemini from "@/public/svg/FrameiconGemini";
import FrameiconCharts from "@/public/svg/FrameiconCharts";
import FrameiconBlocks from "@/public/svg/FrameiconBlocks";
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

const Management: React.FC = () => {
  return (
    <section className="py-14 md:py-[72px] flex flex-col items-center gap-10 relative">
      <div className="flex justify-center items-center bg-[#1FDD8A]/10 rounded-[20px] ">
        <p className="text-dark-text-tertiary opacity-50 p-2">Management</p>
      </div>
      <div>
        <h2 className="text-center tracking-tight !text-[#FAFAFA]">
          Agile Project Planning
        </h2>
        <p className="text-center !text-[#FAFAFA] opacity-50">
          Drive project success with agile project management capabilities
          tailored for small teams focused on rapid product development
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
        <Card
          icon={<FrameiconGemini width={24} height={24} fill="white" />}
          title="Collaborative Management"
          description="Collaboratively manage tasks and assignments in real-time, fostering teamwork and accountability."
        />
        <Card
          icon={<FrameiconBlocks width={24} height={24} fill="white" />}
          title="Backlog Management"
          description="Maintain a backlog of tasks and user stories, ensuring a steady flow of work for your team."
        />
        <Card
          icon={<FrameiconCharts width={24} height={24} fill="white" />}
          title="Progress Monitoring"
          description="Monitor project progress and identify potential bottlenecks with easy-to-read burndown charts."
        />
      </div>
    </section>
  );
};

export default Management;