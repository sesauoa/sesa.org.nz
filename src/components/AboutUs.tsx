import React from "react";
import IndustryImage from "../../public/home-icons/industry_icon.png";
import WorkshopImage from "../../public/home-icons/workshop_icon.png";
import SocialImage from "../../public/home-icons/social_icon.png";

function ContentSections() {
  return (
    <>
      {/* About Us Section */}
      <div
        className="text-white w-full py-28"
        style={{ backgroundColor: "rgb(0,18,43)" }}
      >
        <div className="flex justify-center">
          <div className="w-[500px] md:w-[600px] lg:w-[800px] text-center px-10 md:px-10 lg:px-14">
            <h2 className="text-2xl md:text-3xl font-bold py-4">
              What is SESA?
            </h2>
            <div
              className="mx-auto w-20 bg-blue-500 my-2"
              style={{ height: "2px", backgroundColor: "#70c7b0" }}
            ></div>
            <p className="mt-4 text-gray-300">
              SESA is the Software Engineering Students Association for students
              and alumni of the Software Engineering programme at the{" "}
              <a
                href="https://www.auckland.ac.nz/en.html"
                target="_blank"
                className="text-accent hover:underline"
              >
                University of Auckland
              </a>
              . We organize and run social and career-focused events for the
              350+ software engineering students at UoA, connecting them with
              each other as well as industry professionals.
              <br />
              <br />
              Where necessary we also act as a liaison between the department
              and SOFTENG students, raising any relevant issues (course content,
              difficulties in learning).
            </p>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="bg-gray-900 text-white w-full py-28">
        <div className="text-center py-4 px-4 md:px-10 lg:px-14">
          <h2 className="text-2xl md:text-3xl font-bold py-4">
            What do we do?
          </h2>
          <div
            className="mx-auto w-20 my-2"
            style={{ height: "2px", backgroundColor: "#70c7b0" }}
          ></div>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <div className="flex flex-wrap justify-center px-4 w-full max-w-6xl gap-8">
            {/* Industry Events */}
            <div
              className="p-8 mx-auto bg-gray-900 rounded-3xl shadow-xl border-4 border-gray-400 text-center flex flex-col items-center flex-none"
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
              <h3 className="text-2xl font-bold mb-4 text-gray-300">
                Industry Events
              </h3>
              <p className="text-gray-400">
                Come along to our industry events to expand your network and
                gain insights into the industry.
              </p>
            </div>
            {/* Workshops */}
            <div
              className="p-8 mx-auto bg-gray-900 rounded-3xl shadow-xl border-4 border-gray-400 text-center flex flex-col items-center flex-none"
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
              <h3 className="text-2xl font-bold mb-4 text-gray-300">
                Workshops
              </h3>
              <p className="text-gray-400">
                Engage in workshops to boost your job prospects with CV checks
                and internship events led by experts.
              </p>
            </div>
            {/* Social Events */}
            <div
              className="p-8 mx-auto bg-gray-900 rounded-3xl shadow-xl border-4 border-gray-400 text-center flex flex-col items-center flex-none"
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
              <h3 className="text-2xl font-bold mb-4 text-gray-300">
                Social Events
              </h3>
              <p className="text-gray-400">
                Attend our social events to connect and have fun with your
                fellow software engineering students.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Membership Section */}
      <div
        className="text-white w-full bg-gray-900 py-28"
        style={{ backgroundColor: "rgb(0,18,43)" }}
      >
        <div className="flex justify-center">
          <div className="w-[500px] md:w-[600px] lg:w-[800px] text-center px-10 md:px-10 lg:px-14">
            <h2 className="text-2xl md:text-3xl font-bold py-4">
              Become a member
            </h2>
            <div
              className="mx-auto w-20 bg-blue-500 my-2"
              style={{ height: "2px", backgroundColor: "#70c7b0" }}
            ></div>
            <p className="mt-4 text-gray-300">
              <strong>Joining is 100% free!</strong>
            </p>
            <p className="mt-2 text-gray-300 py-2">
              Follow the instructions on the form linked below to become a
              member, even if you did last year. Membership doesn&apos;t roll over,
              so you need to fill out this form every year!
            </p>
            <p className="mt-2 text-gray-300">
              Once you have filled out the form, don&apos;t forget to connect with us
              on{" "}
              <a
                href="https://facebook.com/sesauoa"
                target="_blank"
                className="text-accent hover:underline"
              >
                Facebook
              </a>
              ,
              <a
                href="https://instagram.com/sesa.uoa"
                target="_blank"
                className="text-accent hover:underline"
              >
                {" "}
                Instagram
              </a>
              ,
              <a
                href="https://www.linkedin.com/company/ausesa/"
                target="_blank"
                className="text-accent hover:underline"
              >
                {" "}
                LinkedIn
              </a>
              , and{" "}
              <a
                href="https://discord.gg/93AW5tMSBc"
                target="_blank"
                className="text-accent hover:underline"
              >
                {" "}
                Discord
              </a>
              , where most of our discussions and announcements take place!
            </p>
            <button className="bg-accent rounded-full font-bold text-lg text-primary-content inline px-6 py-2 mt-6 hover:bg-accent-hover">
              Join Now!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentSections;
