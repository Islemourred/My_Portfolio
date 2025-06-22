import React from 'react';
import { motion } from 'framer-motion';
import { me } from '../assets';

const Avatar = () => {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 rounded-full bg-accent-purple/10 blur-xl" />
        <motion.img
          src={me}
          alt="Islem Ourred"
          className="relative object-cover w-full h-full p-1 bg-white rounded-full shadow-lg"
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut'
          }}
        />
      </motion.div>
    </div>
  );
};

export default Avatar; 