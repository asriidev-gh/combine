import React from "react";
import VideoContainer from "./VideoContainer";
import { Audiowide, Goldman } from "@next/font/google";
import { PiArrowCircleRight } from "react-icons/pi";

const goldman = Goldman({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const audioWide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const LandingPage = () => {
  return (
    <div className="bg-slate-900 flex h-full">
      <div className="max-w-[50rem] flex flex-col mx-auto w-full h-full">
        <header className="mb-auto flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4">
          <nav
            className="w-full px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex items-center justify-between">
              <div className={goldman.className}>
                <a
                  className="flex-none text-xl font-semibold text-white"
                  href="#"
                  aria-label="Brand"
                >
                  COMBINE
                </a>
              </div>
              <div className="sm:hidden">
                <button
                  type="button"
                  className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-gray-700 hover:border-gray-600 font-medium text-gray-300 hover:text-white shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-600 transition-all text-sm"
                  data-hs-collapse="#navbar-collapse-with-animation"
                  aria-controls="navbar-collapse-with-animation"
                  aria-label="Toggle navigation"
                >
                  {/* <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg> */}
                </button>
              </div>
            </div>
            <div
              id="navbar-collapse-with-animation"
              className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
            >
              <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
                <a
                  className="font-medium text-white"
                  href="#"
                  aria-current="page"
                >
                  Home
                </a>
                <a
                  className="font-medium text-gray-400 hover:text-gray-500"
                  href="#"
                >
                  Register
                </a>
              </div>
            </div>
          </nav>
        </header>

        <main id="content" role="main">
          <div className="relative">
            <VideoContainer path="combine.mp4" />
            <div className={audioWide.className}>
              <div className="flex flex-col justify-center items-center gap-3 mb-5">
                <p className="block mt-3 text-xl text-gray-300 text-shadow-md mt-10 ml-10 mr-10">
                  You give it your all even when no one is watching. <br />
                  Now you have a chance to show everyone why!
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-5">
              <a
                className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3.5 text-center border border-2 border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-300 hover:text-white hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition py-3 px-4"
                href="../examples.html"
              >
                <PiArrowCircleRight size={30} />
                REGISTER NOW!
              </a>
            </div>
          </div>
        </main>

        <footer className="mt-auto text-center py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-400">All rights reserved @ 2023</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
