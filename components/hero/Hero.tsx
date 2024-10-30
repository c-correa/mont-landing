import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(630px-var(--header-height))] overflow-hidden pb-10">
      <div className="absolute left-0 top-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-[#27272A] dark:border-dark-border">
        <div className="col-span-1 flex h-full items-center justify-center"></div>
        <div className="col-span-1 flex h-full items-center justify-center border-x border-[#27272A] dark:border-dark-border"></div>
        <div className="col-span-1 flex h-full items-center justify-center"></div>
      </div>

      <div className="relative z-10 flex flex-col divide-y divide-border pt-[35px] dark:divide-dark-border">
        <div className="flex flex-col items-center justify-end">
          <div className="flex items-center gap-2 border border-b-0 border-[#27272A] px-4 py-2 dark:border-dark-border">
            <div className="flex -space-x-3 rtl:space-x-reverse"></div>
            <p className="text-sm tracking-tight text-text-tertiary dark:text-dark-text-tertiary">
              1,250 happy customers
            </p>
          </div>
        </div>
        <div>
          <div className="mx-auto flex min-h-[288px] max-w-[80vw] shrink-0 flex-col items-center justify-center gap-2 px-2 py-4 sm:px-16 lg:px-24">
            <h1 className="max-w-screen-lg text-pretty text-center text-[clamp(32px,7vw,64px)] font-medium leading-none tracking-[-1.44px] text-text-primary dark:text-dark-text-primary md:tracking-[-2.16px]">
              Streamlined Communication for Iterating Fast
            </h1>
            <h2 className="text-md max-w-2xl text-pretty text-center text-text-tertiary dark:text-dark-text-tertiary md:text-lg">
              Acme is an installable, self-hosted team chat system. You can have
              several paragraphs in here and the thing will break gracefully.
            </h2>
          </div>
        </div>
        <div className="flex items-start justify-center px-8 sm:px-24">
          <div className="flex w-full max-w-[80vw] flex-col items-center justify-start md:max-w-[392px]">
            <a
              className="gap-1 bg-[#1FDD8A] font-bold shrink-0 ring-control focus-visible:ring-2 outline-none bg-surface-secondary text-[#333333] border-l border-r border-b border-border dark:bg-dark-surface-secondary dark:text-dark-text-primary dark:border-dark-border hover:bg-surface-tertiary dark:hover:bg-dark-surface-tertiary items-center justify-center px-3.5 text-xl md:px-5 h-14 flex w-full transition-colors duration-150 hover:bg-black/5 hover:text-white dark:hover:bg-white/5"
              href="/"
            >
              Schedule a Call
            </a>
            <a
              className="gap-1 font-normal shrink-0 ring-control focus-visible:ring-2 outline-none bg-accent-500 hover:bg-accent-600 text-textOnAccent-primary border-accent-600 items-center px-3.5 text-sm md:px-5 h-14 flex w-full"
              href="/sign-up"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;