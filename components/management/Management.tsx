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
  <div className="bg-[#141416] rounded-xl p-4 flex flex-col items-center w-full sm:w-80 h-72"> {/* Set a fixed height for uniformity */}
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
        <p className="text-dark-text-tertiary opacity-50 p-2">Gestión</p>
      </div>
      <div>
        <h2 className="text-center tracking-tight !text-[#FAFAFA]">
        Planificación Ágil de Proyectos
        </h2>
        <p className="text-center !text-[#FAFAFA] opacity-50">
        Impulsamos el éxito de tus proyectos con gestión ágil, adaptada a equipos de todos los tamaños y centrada en el desarrollo rápido de soluciones a medida.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 max-w-full w-full justify-center p-1">
        <Card
          icon={<Frameicon width={24} height={24} fill="white" />}
          title="Planificación de Sprints"
          description="Planifique y ejecute tareas de proyecto de manera eficiente dentro de ciclos de sprint iterativos."
        />
        <Card
          icon={<FrameiconTime width={24} height={24} fill="white" />}
          title="Metodologías Ágiles"
          description="Utilizamos metodologías ágiles como Scrum para adaptarnos rápidamente a los cambios y mantener un progreso constante en cada fase del proyecto."
        />
        <Card
          icon={<FrameiconAsterisk width={24} height={24} fill="white" />}
          title="Optimización de Recursos"
          description="Garantizamos una distribución eficiente de los recursos en cada etapa, maximizando el rendimiento y minimizando tiempos de inactividad."
        />
        <Card
          icon={<FrameiconGemini width={24} height={24} fill="white" />}
          title="Gestión colaborativa"
          description="Gestionamos de manera colaborativa las tareas y asignaciones en tiempo real, fomentando el trabajo en equipo y la responsabilidad compartida."
        />
        <Card
          icon={<FrameiconBlocks width={24} height={24} fill="white" />}
          title="Gestión de Riesgos"
          description="Identificamos, evaluamos y mitigamos riesgos potenciales en cada sprint, protegiendo el éxito del proyecto ante posibles obstáculos."
        />
        <Card 

          icon={<FrameiconCharts width={24} height={24} fill="white" />}
          title="Supervisión del progreso"
          description="Monitoreamos el avance del proyecto en tiempo real, detectando y abordando cualquier cuello de botella para mantener el flujo de trabajo sin interrupciones."
        />
      </div>
    </section>
  );
};

export default Management;
