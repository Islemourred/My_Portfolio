import { motion } from "framer-motion";
import { styles } from "../styles";
import { Avatar } from ".";

const Hero = () => {
  return (
    <section
      className={`relative w-full h-screen mx-auto flex items-center justify-center px-6`}
    >
      <div className="max-w-7xl w-full flex flex-col-reverse sm:flex-row items-center justify-center gap-8 sm:gap-16">
        {/* Left side: Text content */}
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="hidden sm:flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-accent-blue" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div className="flex-1">
            <h1 className={`${styles.heroHeadText} text-white-100`}>
              Hi, I'm <span className="text-accent-blue">Ourred Islem</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-dark-gray`}>
              A computer science student specializing in AI and Data science,{" "}
              <br className="sm:block hidden" />
              with a passion for building smart and clean websites and mobile
              apps.
            </p>
            {/* Beautiful Download CV Button */}
            <div className="mt-6 flex justify-center sm:justify-start">
              <a
                href="/CV_Ourred_Islem.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition-colors duration-200 border-2 border-blue-500 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                title="Download My CV"
              >
                <svg
                  className="w-5 h-5 mr-2 -ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                  ></path>
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Right side: Avatar */}
        <div className="flex-shrink-0">
          <Avatar />
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-accent-blue flex justify-center items-start p-2 shadow-lg bg-white/80 backdrop-blur-sm">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-accent-blue mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
