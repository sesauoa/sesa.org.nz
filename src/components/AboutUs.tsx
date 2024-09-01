import React from "react";
import IndustryImage from "../../public/home-icons/industry_icon.png";
import WorkshopImage from "../../public/home-icons/workshop_icon.png";
import SocialImage from "../../public/home-icons/social_icon.png";

function ContentSections() {
  return (
    <div>
      {/* What We Do Section */}
      <div className="flex justify-center py-16">
        <div className="w-[500px] md:w-[600px] lg:w-[850px] text-center px-10 md:px-10 lg:px-14">
          <h2 className="text-2xl md:text-3xl font-bold py-4 text-sesa-teal-dark">
            What is SESA?
          </h2>
          <div className="mx-auto w-20 my-2 bg-sesa-teal-dark h-[2px]"></div>
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
            . We organise and run social and career-focused events for our
            500+ members, connecting them with each other as well as industry
            professionals.
          </p>
        </div>
      </div>

      <div className="w-full pb-10">
        <div className="text-center py-4 px-4 md:px-10 lg:px-14">
          <h2 className="text-2xl md:text-3xl font-bold py-4 text-sesa-teal-dark">
            What do we do?
          </h2>
          <div className="mx-auto w-20 my-2 bg-sesa-teal-dark h-[1px]"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <div className="flex flex-wrap justify-center px-4 w-full max-w-6xl gap-8">
            {/* Industry Events */}
            <div
              className="p-8 mx-auto rounded-3xl shadow-xl border-4 text-center flex flex-col items-center flex-none"
              style={{ width: "330px", margin: "0.5rem" }}
            >
              <img
                src={IndustryImage.src}
                alt="Industry Events"
                style={{
                  width: "150px",
                  height: "auto",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
                className="mb-3"
              />
              <h3 className="text-2xl font-bold mb-4 text-sesa-navy">
                Industry Events
              </h3>
              <p className="text-sesa-navy">
                Come along to our industry events to expand your network and
                gain insights into the industry.
              </p>
            </div>
            {/* Workshops */}
            <div
              className="p-8 mx-auto rounded-3xl shadow-xl border-4 text-center flex flex-col items-center flex-none"
              style={{ width: "330px", margin: "0.5rem" }}
            >
              <img
                src={WorkshopImage.src}
                alt="Workshops"
                style={{
                  width: "150px",
                  height: "auto",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
                className="mb-3"
              />
              <h3 className="text-2xl font-bold mb-4 text-sesa-navy">
                Workshops
              </h3>
              <p className="text-sesa-navy">
                Engage in workshops to boost your job prospects with CV checks
                and internship events led by experts.
              </p>
            </div>
            {/* Social Events */}
            <div
              className="p-8 mx-auto rounded-3xl shadow-xl border-4 text-center flex flex-col items-center flex-none"
              style={{ width: "330px", margin: "0.5rem" }}
            >
              <img
                src={SocialImage.src}
                alt="Social Events"
                style={{
                  width: "150px",
                  height: "auto",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
                className="mb-3"
              />
              <h3 className="text-2xl font-bold mb-4 text-sesa-navy">
                Social Events
              </h3>
              <p className="text-sesa-navy">
                Attend our social events to connect and have fun with your
                fellow software engineering students.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Membership Section */}
      <div className="w-full pb-28">
        <div className="flex justify-center">
          <div className="w-[500px] md:w-[600px] lg:w-[850px] text-center px-10 md:px-10 lg:px-14">
            <h2 className="text-2xl md:text-3xl font-bold py-4 text-sesa-teal-dark">
              Become a member
            </h2>
            <div className="mx-auto w-20 my-2 bg-sesa-teal-dark h-[2px]"></div>
            <p className="mt-4">
              <strong>Joining is 100% free!</strong>
            </p>
            <p className="mt-2 py-2">
              Membership doesn&apos;t roll over, so you need to fill out this
              form every year!
            </p>
            <p className="mt-2">
              Once you have filled out the form, don&apos;t forget to connect
              with us on{" "}
              <a
                href="https://facebook.com/sesauoa"
                target="_blank"
                className="text-sesa-teal-dark hover:underline"
              >
                Facebook
              </a>
              ,
              <a
                href="https://instagram.com/sesa.uoa"
                target="_blank"
                className="text-sesa-teal-dark hover:underline"
              >
                {" "}
                Instagram
              </a>
              ,
              <a
                href="https://www.linkedin.com/company/ausesa/"
                target="_blank"
                className="text-sesa-teal-dark hover:underline"
              >
                {" "}
                LinkedIn
              </a>
              ,{" "}
              <a
                href="https://discord.gg/93AW5tMSBc"
                target="_blank"
                className="text-sesa-teal-dark hover:underline"
              >
                {" "}
                Discord
              </a>
              , and{" "}
              <a
                href="https://www.tiktok.com/@sesauoa"
                target="_blank"
                className="text-sesa-teal-dark hover:underline"
              >
                {" "}
                TikTok
              </a>
              , where most of our discussions and announcements take place!
            </p>
            <div className="flex justify-center mt-5">
              <a
                key="join-button"
                href="/join"
                className="bg-sesa-teal-light cursor-pointer rounded-full font-sans text-lg text-white inline transition-transform duration-200 hover:scale-110 px-6 py-1"
              >
                Join
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentSections;
