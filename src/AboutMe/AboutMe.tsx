import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './about.scss';

const text =
  '   Welcome to my website. Here, you can find information about me, the technologies I utilize, and the projects I have deployed thus far. You can access all the source codes on my GitHub and DockerHub repositories.';
const text1 =
  '  I never take things too seriously.  Instead, I prioritize my family, friendships, and love for sports above all else.';

export const AboutMe = () => {
  // const [photos, setShowPhotos] = useState(false);
  // const [displayedText, setDisplayedText] = useState(text[0]);
  // const [displayedText1, setDisplayedText1] = useState(text1[0]);

  // useEffect(() => {
  //   let index = 1;
  //   let index1 = 1;

  //   const timer = setInterval(() => {
  //     if (index < text.length - 1) {
  //       setDisplayedText((prevText) => prevText + text[index]);
  //       index++;
  //     } else if (index1 < text1.length - 1) {
  //       setDisplayedText1((prevText) => prevText + text1[index1]);
  //       index1++;
  //     } else {
  //       clearInterval(timer);
  //       setShowPhotos(true);
  //     }
  //   }, 50);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <motion.div
      transition={{
        duration: 1,
        ease: 'easeOut',
        delay: 1,
      }}
      animate={{ opacity: 1, display: 'flex' }}
      initial={{ display: 'none', opacity: 0 }}
      exit={{ opacity: 0, transition: { delay: 0, duration: 0.5 } }}
      className="about-root"
    >
      <div className="conent">
        <div className="image-wrapper">
          <img alt="Jakbu Basinski" src="./images/AboutMe1.png" />
        </div>

        <div className="textContent">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
              delay: 1.5,
            }}
            className="text-aboutMe-wrapper"
          >
            <h1 className="text-h1">Hi, my name is Kuba.</h1>
            <p className="text-p">{text}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
              delay: 2,
            }}
            className="text-aboutMe-wrapper1"
          >
            <h1 className="text-h1">In life,</h1>
            <p className="text-p">{text1}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
