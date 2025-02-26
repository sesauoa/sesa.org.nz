import React from "react";
import IndustryImage from "../../public/about-images/industry.jpg";
import WorkshopImage from "../../public/about-images/workshop.jpg";
import SocialImage from "../../public/about-images/social.jpg";
import { Statistics } from "@/data/statistics";
import Card from "@/components/Card";
import JoinInfo from "@/components/JoinInfo";

function ContentSections() {
  const currentYear = new Date().getFullYear();

  const aboutCards = [
    {
      imgSrc: IndustryImage.src,
      alt: "Industry Events",
      title: "Industry Events",
      description:
        "Come along to our industry events to expand your network and gain insights into the industry.",
    },
    {
      imgSrc: WorkshopImage.src,
      alt: "Workshops",
      title: "Workshops",
      description:
        "Engage in workshops to boost your job prospects with CV checks and internship events led by experts.",
    },
    {
      imgSrc: SocialImage.src,
      alt: "Social Events",
      title: "Social Events",
      description:
        "Attend our social events to connect and have fun with your fellow software engineering students.",
    },
  ];

  return (
    <div>
      <div className="flex justify-center pb-10">
        <div className="w-[500px] md:w-[600px] lg:w-[850px] text-center px-10 lg:px-14">
          <h1 className="text-2xl md:text-3xl text-sesa-teal-dark font-bold m-6">
            What is SESA?
          </h1>
          <div className="mx-auto w-20 mb-6 bg-sesa-teal-dark h-[2px]"></div>
          <p className="mt-4">
            SESA is the Software Engineering Students Association for students
            and alumni of the Software Engineering programme at the{" "}
            <a
              href="https://www.auckland.ac.nz/en.html"
              target="_blank"
              className="text-sesa-teal-dark hover:underline"
            >
              University of Auckland
            </a>
            . We organise and run social and career-focused events for our{" "}
            {Statistics.MEMBERS}+ members, connecting them with each other as
            well as industry professionals.
          </p>
        </div>
      </div>

      <div className="flex justify-center text-center space-x-8">
        <div className="w-[130px]">
          <p className="">Founded in</p>
          <strong className="text-4xl">{Statistics.FOUNDING_YEAR}</strong>
        </div>
        <div className="w-[130px]">
          <p className="">Years active</p>
          <strong className="text-4xl">{currentYear - Statistics.FOUNDING_YEAR + 1}</strong>
        </div>
      </div>

      <div className="w-full pb-10">
        <div className="text-center py-4 px-4 md:px-10 lg:px-14">
          <h1 className="text-2xl md:text-3xl text-sesa-teal-dark font-bold m-6">
            What do we do?
          </h1>
          <div className="mx-auto w-20 mb-6 bg-sesa-teal-dark h-[1px]"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <div className="flex flex-wrap justify-center px-4 w-full max-w-6xl gap-8">
            <Card cards={aboutCards} />
          </div>
        </div>
      </div>

      <div className="w-full pb-10">
        <div className="flex justify-center">
          <div className="w-[500px] md:w-[600px] lg:w-[850px] text-center px-10 md:px-10 lg:px-14">
            <h1 className="text-2xl md:text-3xl text-sesa-teal-dark font-bold m-6">
              Become a member
            </h1>
            <div className="mx-auto w-20 mb-6 bg-sesa-teal-dark h-[2px]"></div>
            <JoinInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentSections;
