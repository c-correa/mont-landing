import Link from "next/link";
import React from "react";

const Collaboration: React.FC = () => {
  return (
    <section className="container box-a py-14 md:py-[72px] flex flex-col items-center gap-10 relative mx-auto px-6">
      <article className=" bg-[#141416] relative flex flex-col items-center justify-center gap-9 self-stretch overflow-hidden rounded-xl border border-border bg-surface-secondary p-6 dark:border-dark-border dark:bg-dark-surface-secondary">
        <div className="absolute left-0 top-10 h-px w-full bg-gradient-to-l from-black/40 to-transparent dark:from-white/40 dark:to-transparent"></div>
        <div className="absolute bottom-[72px] left-0 h-px w-full bg-gradient-to-l from-black/40 to-transparent dark:from-white/40 dark:to-transparent"></div>
        <div className="absolute bottom-7 left-0 h-px w-full bg-gradient-to-l from-black/40 to-transparent dark:from-white/40 dark:to-transparent"></div>
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-surface-secondary blur-3xl filter dark:bg-dark-surface-secondary"></div>

        <div className="relative z-20 flex flex-col items-center gap-2 text-center">
          <h4 className="text-center text-3xl font-medium tracking-tighter text-text-primary dark:text-dark-text-primary sm:max-w-full sm:px-0 md:text-4xl">
            Enhance your teams productivity with Acme
          </h4>
          <p className="text-lg text-text-secondary dark:text-dark-text-secondary md:text-xl w-[50%]">
            Write in threads, focus, and collaborate without video calls.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-2">
          <Link
            className="gap-1 bg-[#1FDD8A]/60 font-normal shrink-0 rounded-full ring-control focus-visible:ring-2 outline-none bg-accent-500 hover:bg-accent-600 text-textOnAccent-primary border-accent-600 inline-flex items-center justify-center px-3.5 text-sm h-8 md:px-5"
            href="/"
          >
            Get started
          </Link>
        </div>
      </article>
    </section>
  );
};

export default Collaboration;
