import React from "react";

const FocusCollab: React.FC = () => {
  return (
    <section className="py-14 md:py-[72px] flex flex-col items-center gap-10 relative container mx-auto px-6">
      <article className="flex flex-col justify-center gap-9 self-stretch rounded-xl bg-[#1FDD8A]/10 p-6 dark:bg-accent-600/10 lg:flex-row lg:justify-between lg:p-10">
        <div className="flex flex-col gap-2">
          <h4 className="text-3xl font-medium text-text-primary dark:text-dark-text-primary lg:text-4xl">
          Potencie su Equipo con Software a Medida.
          </h4>
          <p className="text-lg   lg:text-xl">
          Mejoramos la productividad de su equipo mediante soluciones de software a medida que se adaptan a sus necesidades. En Montgomery, transformamos sus ideas en herramientas efectivas que optimizan procesos y potencian el rendimiento.
          </p>
        </div>
        <div className="flex justify-center gap-2 md:flex lg:flex-col">
          <a
            className="bg-[#1FDD8A]/40  w-60 rounded-full px-4 py-3 font-bold text-lg text-[#CECECE]"
            href="/"
          >
            Agendar una reunión
          </a>
        </div>
      </article>
    </section>
  );
};

export default FocusCollab;
