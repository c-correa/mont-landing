import React from "react";

const FocusCollab: React.FC = () => {
  return (
    <section className="py-14 md:py-[72px] flex flex-col items-center gap-10 relative container mx-auto px-6">
      <article className="flex flex-col justify-center gap-9 self-stretch rounded-xl bg-[#1FDD8A]/10 p-6 dark:bg-accent-600/10 lg:flex-row lg:justify-between lg:p-10">
        <div className="flex flex-col gap-2">
          <h4 className="text-3xl font-medium text-text-primary dark:text-dark-text-primary lg:text-4xl">
            Enhance your team's productivity with Acme
          </h4>
          <p className="text-lg text-text-secondary dark:text-dark-text-secondary lg:text-xl">
            Write in threads, focus, and collaborate without video calls.
          </p>
        </div>
        <div className="grid grid-cols-2 items-center gap-2 md:flex lg:flex-col">
          <a
            className="gap-1 font-normal shrink-0 rounded-full ring-control focus-visible:ring-2 outline-none outline-0 bg-accent-500 hover:bg-accent-600 text-textOnAccent-primary border-accent-600 inline-flex items-center justify-center px-3.5 text-sm h-8 md:px-5"
            href="/sign-up"
          >
            Get started
          </a>
          <a
            className="gap-1 font-normal shrink-0 rounded-full ring-control focus-visible:ring-2 outline-none outline-0 bg-surface-secondary text-text-primary border-border border dark:bg-dark-surface-secondary dark:text-dark-text-primary dark:border-dark-border hover:bg-surface-tertiary dark:hover:bg-dark-surface-tertiary inline-flex items-center justify-center px-3.5 text-sm h-8 md:px-5"
            href="#"
          >
            See more
          </a>
        </div>
      </article>
    </section>
  );
};

export default FocusCollab;
