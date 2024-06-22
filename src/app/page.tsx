"use client";

import Header from "@/components/SesaHeader";
import Footer from "@/components/footer";
import SplashHeader from "@/components/SplashHeader";

import HomeBackground from "../../public/homeBackgroundGreen.png";
import TestImage from "../../public/test_image.jpeg";
import IndustryImage from "../../public/home-icons/industry_icon.png";
import WorkshopImage from "../../public/home-icons/workshop_icon.png";
import SocialImage from "../../public/home-icons/social_icon.png";

// below are possible ways to add the coloured overlay using css (which would make it easy to change themes)
// currently the green background is part odf the image because text appears behind the coloured overlay otherwise.
// , boxShadow: "inset 0 0 0 1000px rgba(0,55,0,.2)"
// <div className="fixed top-0 left-0 w-48 h-full z-0 bg-base-100 z-0 opacity-80"></div>

const images: string[] = [HomeBackground.src, TestImage.src];

export default function Home() {
  return (
    <div>
      
      <Header />
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${HomeBackground.src})` }}
        // style={{ backgroundImage: `url(${HomeBackground.src})` }}
      >
        <SplashHeader
          images={images}
          headerText="Software Engineering Students Association"
          bodyText="SESA is the association for students and alumni of the Software Engineering programme at the University of Auckland."
        />
      </div>
      {/* About Us Section */}
      <div className="text-white w-full py-10" style={{ backgroundColor: 'rgb(0,18,43)' }}>
        <div className="flex justify-center">
          <div className="w-1/2 text-center py-16 px-8 md:px-10 lg:px-14"> 
            <h2 className="text-xl md:text-3xl font-bold">What is SESA?</h2>
            <div className="mx-auto w-20 bg-blue-500 my-2" style={{ height: '2px', backgroundColor: '#70c7b0'}}></div> {/* Blue dash under the title */}
            <p className="mt-4 text-gray-300">
              SESA is the Software Engineering Students Association for students and alumni of the Software Engineering programme at the University of Auckland. We organise and run social and career-focused events for the 350+ software engineering students at UoA, connecting them with each other as well as industry professionals.
              <br /><br />
              Where necessary we also act as a liaison between the department and SOFTENG students, raising any relevant issues (course content, difficulties in learning).
            </p>
          </div>
        </div>
      </div>
      {/* What We Do Section */}
      <div className="bg-gray-900 text-white w-full py-20">
        <div className="text-center py-4 px-8 md:px-10 lg:px-14">
          <h2 className="text-xl md:text-3xl font-bold">What do we do?</h2>
          <div className="mx-auto w-20 my-2" style={{ height: '2px', backgroundColor: '#70c7b0'}}></div>
        </div>
        <div className="flex justify-center">
          <div className="max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-900 rounded-3xl shadow-xl border-4 border-gray-400 text-center flex flex-col items-center">
              <img src={IndustryImage.src} alt="Industry Events" style={{ width: '150px', height: 'auto' }} className="mb-3" />
              <h3 className="text-2xl font-bold mb-4 text-gray-300">Industry Events</h3>
              <p className="text-gray-400">Attend our social gatherings to build relationships and collaborate with fellow software engineering students.</p>
            </div>
            <div className="p-8 bg-gray-900 rounded-3xl shadow-xl border-4 border-gray-400 text-center flex flex-col items-center">
              <img src={WorkshopImage.src} alt="Workshops" style={{ width: '150px', height: 'auto' }} className="mb-3" />
              <h3 className="text-2xl font-bold mb-4 text-gray-300">Workshops</h3>
              <p className="text-gray-400">Engage in workshops to boost your job prospects with CV checks and internship events led by experts.</p>
            </div>
            <div className="p-8 bg-gray-900 rounded-3xl shadow-xl border-4 border-gray-400 text-center flex flex-col items-center">
              <img src={SocialImage.src} alt="Social Events" style={{ width: '150px', height: 'auto' }} className="mb-3" />
              <h3 className="text-2xl font-bold mb-4 text-gray-300">Social Events</h3>
              <p className="text-gray-400">Attend our social events to build relationships and collaborate with fellow software engineering students.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Membership Section */}
      <div className="text-white w-full bg-gray-900">
        <div className="flex justify-center">
          <div className="w-1/2 text-center py-16 px-8 md:px-10 lg:px-14">
            <h2 className="text-xl md:text-3xl font-bold">Become a member</h2>
            <div className="mx-auto w-20 bg-blue-500 my-2" style={{ height: '2px', backgroundColor: '#70c7b0'}}></div>
            <p className="mt-4 text-gray-300">
              Joining is 100% free! <br/> Follow the instructions on the form to become a member, even if you did this last year. Membership doesn't roll over so you need to fill out this form each year! <br/> Once you have filled out the form, don't forget to connect with us on Facebook, Instagram, LinkedIn, and Discord where most of our discussions and announcements take place!
            </p>
            <a href="/join" className="relative inline-flex items-center justify-center p-0.5 mt-6 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
            Join Now!
            </span>
            </a>


          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
