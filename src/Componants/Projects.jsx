import React from "react";
import BookStoreImage from "../assets/images/Book-Store.png";
import MyAssistantImage from "../assets/images/My-assistant.png";
import ReactCrudImage from "../assets/images/React-Crud.png";
import GroceryMartImage from "../assets/images/Grocery-Mart.png";
import CurrencyImage from "../assets/images/Currency-Converter.png";

const Projects = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-20 px-4 relative pb-8 sm:pb-16">
        <h2 className="text-3xl sm:text-[25px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-b-2 border-[#1788ae]">
          Latest Projects
        </h2>
        {/* Project 1 - Book Store */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-[#459bd5] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://github.com/Ajuu07/Book-Store"
            className="flex w-full relative justify-center sm:justify-start"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-jump duration-200">
              <img
                className="max-w-[350px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,140,246,0.6)]  "
                src={BookStoreImage}
                alt="Book Store Project"
              />
              <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#459bd5] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Book-Store
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </span>
            </div>
          </a>
          <div className="w-full">
            <h3 className="text-[#459bd5] font-bold text-2xl md:text-4xl">
              Book-Store
            </h3>
            <p className="text-justify text-sm md:text-base mt-2">
              Book Store Web App – A full-featured MERN stack application that
              allows users to browse, search, and manage books with secure
              authentication and dynamic UI. Built with React, Node.js, Express,
              MongoDB, and Tailwind CSS, featuring light/dark mode, protected
              routes.
            </p>
          </div>
        </div>
        {/* Project 2 - My Assistant */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="order-2 sm:order-1 w-full">
            <h3 className="text-[#ffe578] font-bold text-2xl md:text-4xl">
              My-Assistant
            </h3>
            <p className="text-justify text-sm md:text-base mt-2">
              A virtual assistant web app like ChatGPT or Gemini, built using
              HTML, CSS, and JavaScript. It takes user input, sends it to an
              API, and displays AI-generated responses in a chat-like interface.
            </p>
          </div>
          <div className="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-[#ffe578] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://github.com/Ajuu07/My-Assistant"
            className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          >
            <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
              <img
                className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={MyAssistantImage}
                alt="MyAssistantImage"
              />
              <span className="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#ffe578] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                My-Assistant
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </span>
            </div>
          </a>
        </div>
        {/* Project 3 - React CRUD App */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-[#fc815c] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="#"
            className="flex w-full relative justify-center sm:justify-start"
          >
            <div className="flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200">
              <img
                className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={ReactCrudImage}
                alt="ReactCrudImage"
              />
              <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#fc815c] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                React-Crud-App
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </span>
            </div>
          </a>
          <div className="w-full">
            <h3 className="text-[#fc815c] font-bold text-2xl md:text-4xl">
              React-Crud-App
            </h3>
            <p className="text-justify text-sm md:text-base mt-2">
              A simple React-based CRUD application with Create, Read, Update,
              and Delete functionalities. Built using React hooks and functional
              components for efficient state and UI management.
            </p>
          </div>
        </div>
        {/* Project 4 - Grocery Mart */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="order-2 sm:order-1 w-full">
            <h3 className="text-[#47afa1] font-bold text-2xl md:text-4xl">
              Grocery Mart
            </h3>
            <p className="text-justify text-sm md:text-base mt-2">
              A responsive Grocery Shop website built using HTML, CSS, and
              JavaScript. Users can browse products, add them to the cart, and
              view the total in real-time. The site features interactive UI with
              dynamic cart functionality.
            </p>
          </div>
          <div className="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-[#47afa1] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://github.com/Ajuu07/GroceryMart"
            className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          >
            <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
              <img
                className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={GroceryMartImage}
                alt="GroceryMartImage"
              />
              <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#47afa1] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Grocery-Mart
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </span>
            </div>
          </a>
        </div>
        {/* Project 5 - Currency Converter */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-[#fc815c] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://github.com/Ajuu07/Simple-Currency-Converter"
            className="flex w-full relative justify-center sm:justify-start"
          >
            <div className="flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200">
              <img
                className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={CurrencyImage}
                alt="CurrencyImage"
              />
              <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#fc815c] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Currency Converter
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </span>
            </div>
          </a>
          <div className="w-full">
            <h3 className="text-[#fc815c] font-bold text-2xl md:text-4xl">
              Currency Converter
            </h3>
            <p className="text-justify text-sm md:text-base mt-2">
              A simple Currency Converter web app that allows users to convert
              between different currencies in real time. Built using HTML, CSS,
              and JavaScript with exchange rate data fetched via API.
            </p>
          </div>
        </div>
        {/* Central Vertical Line */}
        <div className="w-[2px] hidden sm:block bg-[#1788ae] absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
      </div>
      <hr />
    </>
  );
};

export default Projects;
