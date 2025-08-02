import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const achievements = [
  {
    title: "AiFest25 – June 2025",
    description:
      "First place at the AiFest'25 Datathon (GDG on Campus: ENSIA), for developing innovative solutions in Computer Vision, NLP, reinforcement learning, EEG signal processing, and advanced model engineering such as BERT, U-Net, BiLSTM-CRF, and CNN-LSTM.",
    image: "src/assets/award1.jpg",
    link: "https://www.linkedin.com/posts/islem-ourred-02380327a_aichampion-deeplearning-kaggle-activity-7340545501034934272-4ttc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQbVFsBGEyPIGJ0LzuEq1NRZrgFuOJ8opw",
  },
  {
    title: "Innovpost Hackathon – December 2024",
    description:
      "Second place with our innovative solution for Algérie Poste: an intuitive mobile app, a real-time analytics dashboard, and AI tools to boost customer engagement and satisfaction.",
    image: "src/assets/award2.jpg",
    link: "https://www.linkedin.com/posts/islem-ourred-02380327a_hello-community-im-very-excited-to-announce-activity-7272101449176690688-HsUD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQbVFsBGEyPIGJ0LzuEq1NRZrgFuOJ8opw",
  },
  {
    title: "DevFest2024 Hackathon - October 2024",
    description:
      "First place in the online phase with SmartBand, a real-time satellite bandwidth monitoring solution for ISPs, combining GNS3 simulation, Wireshark, and RESTful APIs.",
    image: "src/assets/award3.png",
    link: "https://www.linkedin.com/posts/islem-ourred-02380327a_devfest-algiers-2024-activity-7263746999101919233-tqmV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQbVFsBGEyPIGJ0LzuEq1NRZrgFuOJ8opw",
  },
];

const RealisationCard = ({ index, title, description, image, link }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="flex-1 flex flex-col h-full"
    style={{ minHeight: 540, maxHeight: 540 }}
  >
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="bg-white p-5 rounded-2xl sm:w-[360px] w-full shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100 flex flex-col h-full"
      style={{ minHeight: 540, maxHeight: 540 }}
    >
      <div className="relative w-full h-[230px] mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl border border-blue-200 shadow-sm"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <h3 className="text-white-100 font-bold text-[24px] mb-2 text-center">
          {title}
        </h3>
        <p className="mt-2 text-dark-gray text-[14px] text-center">
          {description}
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 bg-blue-500 text-white rounded-full font-semibold shadow hover:bg-blue-600 transition-colors duration-200"
        >
          View on LinkedIn
        </a>
      </div>
    </Tilt>
  </motion.div>
);

const RealisationsPodium = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Awards</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Achievements & Podiums
        </h2>
      </motion.div>
      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-dark-gray text-[17px] max-w-3xl leading-[30px] text-center"
        >
          Here are some of my awards and achievements from major hackathons and
          competitions, demonstrating my commitment to innovation and technical
          excellence.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-col md:flex-row flex-wrap gap-7 justify-center items-stretch min-h-[500px]">
        {achievements.map((item, idx) => (
          <RealisationCard key={item.title} index={idx} {...item} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(RealisationsPodium, "realisations");
