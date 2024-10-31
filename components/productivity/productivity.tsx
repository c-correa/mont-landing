"use client";
import React, { useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BarChar from "@/public/svg/BarChar";
import Command from "@/public/svg/Command";
import Message from "@/public/svg/Message";
import Mail from "@/public/svg/Mail";
import Smile from "@/public/svg/Smile";
import Zap from "@/public/svg/Zap";

const Productivity: React.FC = () => {
  return (
    <>
      <section className="flex flex-col gap-10 items-center lg:!flex-row lg:container lg:gap-0 lg:mx-auto lg:p-28 md:py-[72px] py-14 relative">
        <div className="container box-c lg:pl-0 lg:pr-12 lg:w-1/2 mx-auto px-6 relative self-stretch shrink top-0 xl:pr-20">
          <div className="sticky bottom-0 top-[calc(var(--header-height)+40px)] flex flex-col gap-10">
            <div className="flex flex-col gap-3 self-start items-start">
              <div className="flex justify-center items-center bg-[#1FDD8A]/10 rounded-[20px] ">
                <p className="text-dark-text-tertiary opacity-50 p-2">
                  Productivity
                </p>
              </div>
              <div className="flex max-w-[800px] flex-col justify-center gap-1 items-start self-start">
                <h4
                  className="text-pretty text-3xl font-medium md:text-4xl text-left"
                  title="Supercharge Team Productivity"
                >
                  Supercharge Team Productivity
                </h4>
              </div>
              <p className="max-w-screen-md text-pretty text-lg font-light text-text-tertiary dark:text-dark-text-tertiary md:text-xl text-left">
                Keep your team focused and productive as they collaborate on
                building and shipping products swiftly.
              </p>
            </div>
            <div className="flex items-center gap-3 md:order-3">
              <a
                className="gap-1 font-normal shrink-0 rounded-full ring-control focus-visible:ring-2 outline-none outline-0 bg-accent-500 hover:bg-accent-600 text-textOnAccent-primary border-accent-600 inline-flex items-center justify-center h-9 px-5 text-sm md:text-base md:h-10"
                href="/sign-up"
              >
                Get started
              </a>
              <a
                className="gap-1 font-normal shrink-0 rounded-full ring-control focus-visible:ring-2 outline-none outline-0 bg-surface-secondary text-text-primary border-border border dark:bg-dark-surface-secondary dark:text-dark-text-primary dark:border-dark-border hover:bg-surface-tertiary dark:hover:bg-dark-surface-tertiary inline-flex items-center justify-center h-9 px-5 text-sm md:text-base md:h-10"
                href="/features/realtime-insights"
              >
                See more
              </a>
            </div>
          </div>
        </div>
        <div className="w-full box-b flex-1 shrink-0 lg:w-1/2 lg:flex-1">
          <div className="no-scrollbar flex gap-10 overflow-auto px-6 lg:flex-col lg:px-0">
            <article className="flex w-[300px] shrink-0 gap-4 rounded-lg  bg-surface-secondary p-4 dark:border-dark-border dark:bg-dark-surface-secondary lg:w-full lg:flex-row lg:p-5">
              <Card className="flex">
                <CardHeader className="flex-row align-center gap-3">
                  <Mail width={54} height={54} fill="white" />
                </CardHeader>
                <CardContent className="p-3">
                  <CardTitle className="text-3xl mb-3">
                    Real-time Messaging
                  </CardTitle>
                  <p>
                    Instantly communicate with your team, ensuring swift decision-making and seamless collaboration on project tasks and updates.
                  </p>
                </CardContent>
              </Card>
            </article>
            <article className="flex w-[300px] shrink-0 gap-4 rounded-lg bg-surface-secondary p-4 dark:border-dark-border dark:bg-dark-surface-secondary lg:w-full lg:flex-row lg:p-5">
              <Card className="flex">
                <CardHeader className="flex-row align-center gap-3">
                  <Zap width={54} height={54} fill="white" />
                </CardHeader>
                <CardContent className="p-3">
                  <CardTitle className="text-3xl mb-3">
                    Task Management
                  </CardTitle>
                  <p>
                    Organize and prioritize tasks effectively, assigning responsibilities and tracking progress to keep projects on schedule and within scope.
                  </p>
                </CardContent>
              </Card>
            </article>
            <article className="flex w-[300px] shrink-0 gap-4 rounded-lg bg-surface-secondary p-4 dark:border-dark-border dark:bg-dark-surface-secondary lg:w-full lg:flex-row lg:p-5">
              <Card className="flex">
                <CardHeader className="flex-row align-center gap-3">
                  <BarChar width={54} height={54} fill="white" />
                </CardHeader>
                <CardContent className="p-3">
                  <CardTitle className="text-3xl mb-3">
                    File Sharing
                  </CardTitle>
                  <p>
                    Share documents, images, and other files effortlessly within your team, enabling easy access to project resources and materials.
                  </p>
                </CardContent>
              </Card>
            </article>
            <article className="flex w-[300px] shrink-0 gap-4 rounded-lg bg-surface-secondary p-4 dark:border-dark-border dark:bg-dark-surface-secondary lg:w-full lg:flex-row lg:p-5">
              <Card className="flex">
                <CardHeader className="flex-row align-center gap-3">
                  <Smile width={54} height={54} fill="white" />
                </CardHeader>
                <CardContent className="p-3">
                  <CardTitle className="text-3xl mb-3">
                    Real-time Insights
                  </CardTitle>
                  <p>
                    Gain actionable insights instantly with real-time data analysis and visualization.
                  </p>
                </CardContent>
              </Card>
            </article>
            <article className="flex w-[300px] shrink-0 gap-4 rounded-lg bg-surface-secondary p-4 dark:border-dark-border dark:bg-dark-surface-secondary lg:w-full lg:flex-row lg:p-5">
              <Card className="flex">
                <CardHeader className="flex-row align-center gap-3">
                  <Command width={54} height={54} fill="white" />
                </CardHeader>
                <CardContent className="p-3">
                  <CardTitle className="text-3xl mb-3">
                    Smart Notifications
                  </CardTitle>
                  <p>
                    Stay informed about project updates and important discussions without being overwhelmed, thanks to customizable notification settings.
                  </p>
                </CardContent>
              </Card>
            </article>
            <article className="flex w-[300px] shrink-0 gap-4 rounded-lg bg-surface-secondary p-4 dark:border-dark-border dark:bg-dark-surface-secondary lg:w-full lg:flex-row lg:p-5">
              <Card className="flex">
                <CardHeader className="flex-row align-center gap-3">
                  <Message width={54} height={54} fill="white" />
                </CardHeader>
                <CardContent className="p-3">
                  <CardTitle className="text-3xl mb-3">
                    Team Analytics
                  </CardTitle>
                  <p>
                    Gain insights into team performance and communication trends
                    with built-in analytics, empowering you to optimize
                    workflows and enhance productivity.
                  </p>
                </CardContent>
              </Card>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Productivity;
