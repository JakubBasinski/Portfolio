import './module.main.scss';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
const text = ['AMBITION.', 'PASSION.', 'CREATIVITY.'];

export const Main = () => {
  const [animationOverLetters, setAnimation] = useState<null | number>(null);

  return (
    <div className="main-root">
      <div className="center">
        <div className="two-columns">
          <div className="text-wrapper">
            {text.map((word, index) => (
              <motion.div
                className="single-word-wrapper"
                key={index}
                transition={{
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                exit={{ opacity: 0, y: -10 }}
              >
                <motion.p
                  className="single-word"
                  onMouseEnter={() => {
                    setAnimation(index);
                  }}
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{
                    duration: 0.5,
                    ease: 'easeOut',
                    delay: index,
                  }} 
                >
                  {word.split('').map((letter: any, i: any) => (
                    <span
                      className={
                        animationOverLetters === index
                          ? 'letter wave'
                          : 'letter '
                      }
                      style={{ animationDelay: `${i * 0.1}s` }}
                      key={i}
                    >
                      {letter}
                    </span>
                  ))}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
