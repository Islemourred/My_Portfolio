import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { newServices } from "../constants/newServices";
import { FaBrain, FaLaptopCode, FaMobileAlt, FaPalette } from "react-icons/fa";

function ServiceCard({ title, description, icon: Icon, color }) {
  return (
    <div className={`w-full max-w-xs rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-7 flex flex-col items-center text-center border border-gray-100 mx-auto ${color}`}>
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/80 mb-4 shadow-md">
        <Icon className="text-3xl text-blue-700" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">{title}</h3>
      <p className="text-white/90 text-base mb-1 drop-shadow">{description}</p>
    </div>
  );
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-dark-gray text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a final year computer science student at the Higher School of
        Computer Science in Sidi Bel Abbes. I'm focusing on artificial
        intelligence and data science as part of my studies. I also enjoy
        building websites and mobile apps, especially working on the design and
        user experience. I like combining tech and creativity to create things
        that are both smart and easy to use.
      </motion.p>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {newServices.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
