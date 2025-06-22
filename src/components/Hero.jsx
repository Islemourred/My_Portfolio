import { motion } from "framer-motion";
import { styles } from "../styles";
import { Avatar } from ".";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className="absolute inset-0 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
        {/* Left side: Text content */}
        <div className='flex items-start gap-5'>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-accent-purple shadow-lg' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white-100`}>
              Hi, I'm <span className='text-accent-purple'>Ourred Islem</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-dark-gray`}>
              A computer science student specializing in AI and Data science, <br className='sm:block hidden' />
              with a passion for building smart and clean websites and mobile apps.
            </p>
          </div>
        </div>

        {/* Right side: Avatar */}
        <div className="flex-shrink-0 mt-10 md:mt-0">
          <Avatar />
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-accent-purple flex justify-center items-start p-2 shadow-lg bg-white/80 backdrop-blur-sm'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-accent-purple mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
