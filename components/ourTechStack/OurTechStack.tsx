import React from 'react';
import Nextjs from '@/public/svg/Next';
import AmazonWebServices from '@/public/svg/AmazonWebServices';
import GraphQL from '@/public/svg/GraphQL';
import TailwindCSS from '@/public/svg/TailwindCSS';
import TypeScript from '@/public/svg/TypeScript';
import Nodejs from '@/public/svg/Nodejs';
import MongoDB from '@/public/svg/MongoDB';
import NestJS from '@/public/svg/Nest';
import PostgreSQL from '@/public/svg/PostgresSQL';

const OurTechStack: React.FC = () => {
  return (
    <section className="py-14 md:py-[72px] flex flex-col items-center gap-10 relative">
    <h2 className="text-center tracking-tight text-dark-text-tertiary opacity-50">
      Our Tech Stack
    </h2>
    <div className="no-scrollbar flex max-w-full justify-center overflow-auto">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[30vw] bg-transparent bg-gradient-to-r from-surface-primary dark:from-dark-surface-primary xl:hidden"></div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[30vw] bg-transparent bg-gradient-to-l from-surface-primary dark:from-dark-surface-primary xl:hidden"></div>
      <div className="flex shrink-0 h-[100px] items-center gap-4 px-6 lg:gap-6 lg:px-12">
        <figure className="flex h-16 items-center px-2 py-3 lg:p-4">
          <Nodejs width={80} height={80} />
        </figure>
        <figure className="flex h-16 items-center px-2 py-3 lg:p-4">
          <NestJS width={80} height={80} />
        </figure>
        <figure className="flex h-16 items-center px-2 py-3 lg:p-4">
          <TypeScript width={80} height={80} />
        </figure>
        <figure className="flex h-16 items-center px-2 py-3 lg:p-4">
          <GraphQL width={80} height={80} />
        </figure>
        <figure className="flex h-16 items-center px-2 py-3 lg:p-4">
          <PostgreSQL width={80} height={80} />
        </figure>
        <figure className="flex h-16 items-center px-2 py-3 lg:p-4">
          <MongoDB width={80} height={80} />
        </figure>
        <figure className="flex h-16 items-center px-2 py-3 lg:p-4">
          <Nextjs width={80} height={80} />
        </figure>
        <figure className="flex h-16 items-center px-2 py-3 lg:p-4">
          <TailwindCSS width={80} height={80} />
        </figure>
        <figure className="flex h-16 items-center px-2 py-3 lg:p-4">
          <AmazonWebServices width={80} height={80} />
        </figure>
      </div>
    </div>
  </section>
  );
};

export default OurTechStack;
