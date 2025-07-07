import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import MyImg from "../assets/images/My Img.jpg";

const About = () => {
  return (
    <div className="text-white mt-10 py-12 px-5 min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
      <h2 className="text-4xl font-bold text-center text-[#1788ae] mb-12 border-b-4 border-[#1788ae] w-max mx-auto px-6 py-2 rounded-md">
        ABOUT ME
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
        <div className="lg:w-1/2 w-full space-y-10">
          <p className="text-gray-300 text-lg leading-relaxed tracking-wide">
            Hi, I'm <strong className="text-white">Ajit Laxman Wadikar</strong>{" "}
            from Pune. I completed my{" "}
            <strong>B.Tech in Computer Science Engineering</strong> from Deogiri
            Institute of Engineering And Management studies, Chh. Sambhaji
            Nagar, and also hold a <strong>Diploma</strong> from Vidhya Vikas
            Polytechnic, Solapur.
            <br />
            I’ve done internships as a <strong>Full Stack Developer</strong> at
            Seven Mentor Pvt. Ltd.,
            <strong> Sales & Customer Support</strong> at Navneet Top Tech, and
            most recently as a<strong> MERN Stack Developer Intern</strong> at
            Speedup Infotech Pvt. Ltd. I'm passionate about building web
            applications and currently looking for roles in
            <strong> Frontend, Backend, or MERN Stack Development</strong>.
          </p>

          <div>
            <h3 className="text-2xl font-semibold text-[#1788ae] mb-4 border-b-2 border-[#1788ae] w-max px-4 py-2">
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "HTML",
                "CSS",
                "HTML5",
                "CSS3",
                "JavaScript",
                "React.js",
                "Bootstrap",
                "Tailwind",
                "Redux",
                "Node.js",
                "Express.js",
                "MongoDB",
                "SQL",
                "Mongoose",
                "Postman",
                "Git",
                "GitHub",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-[#1e293b] text-gray-200 px-3 py-1 rounded-full text-sm font-medium border border-[#334155] hover:bg-[#334155] transition"
                >
                  #{skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full space-y-10 flex flex-col items-center">
          {/* Profile Image */}
          <img
            src={MyImg}
            alt="Ajit Laxman Wadikar"
            className="w-64 h-64 object-cover rounded-lg shadow-lg grayscale sm:hover:grayscale-0 sm:hover:scale-105 transition duration-500 border-4 border-[#1788ae]"
          />

          <div className="w-full mt-12">
            <h2 className="text-3xl font-bold text-center text-[#1788ae] tracking-wider mb-6">
              MERN STACK
            </h2>
            <div className="flex justify-center items-center gap-10 text-6xl flex-wrap">
              <div className="flex flex-col items-center">
                <SiMongodb className="text-green-500" />
                <span className="text-green-500 font-bold mt-2 text-xl">M</span>
              </div>
              <div className="flex flex-col items-center">
                <SiExpress className="text-white bg-black p-1 rounded-full" />
                <span className="text-white font-bold mt-2 text-xl">E</span>
              </div>
              <div className="flex flex-col items-center">
                <FaReact className="text-cyan-400" />
                <span className="text-cyan-400 font-bold mt-2 text-xl">R</span>
              </div>
              <div className="flex flex-col items-center">
                <FaNodeJs className="text-green-600" />
                <span className="text-green-600 font-bold mt-2 text-xl">N</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
