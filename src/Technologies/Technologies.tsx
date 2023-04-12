import React from 'react';
import './module.technologies.scss';
import { motion } from 'framer-motion';

const technologies = [
  {
    t: 'Frontend',
    bg: 'rgb(26, 204, 137, 255)',
    list: [
      {
        icon: './Icons/JS.png',
        level: 'Javascript',
        cl: 'rgb(26, 204, 137, 255)',
      },
      { icon: './Icons/TS.png', level: 'Typescript', cl: '#52c19c' },
      { icon: './Icons/react.png', level: 'React', cl: '#52c19c' },
      { icon: './Icons/angular.png', level: 'Angular', cl: '#52c19c' },
    ],
  },
  {
    t: 'Backend',
    bg: '#a252c1',
    list: [
      { icon: './Icons/Node.png', level: 'Node', cl: '#a252c1' },
      { icon: './Icons/Nest.png', level: 'Nest', cl: '#a252c1' },
      { icon: './Icons/Mongo.png', level: 'Mongo', cl: '#a252c1' },
      { icon: './Icons/MySql.png', level: 'MySql', cl: '#a252c1' },
    ],
  },
  {
    t: 'Deployment & Testing',
    bg: '#6aecef',
    list: [
      { icon: './Icons/Docker.png', level: 'Docker', cl: '#6aecef' },
      { icon: './Icons/Jest.png', level: 'Jest', cl: '#6aecef' },
    ],
  },
  //   { t: 'Testing', desc: '', bg: '#6152c1cf' },
  //   { t: 'Node', desc: '', bg: '#52c19ccf' },
  //   { t: 'Nest', desc: '', bg: '#52c19ccf' },
  //   { t: 'MongoDB', desc: '', bg: '#52c19ccf' },
  //   { t: 'MySQL', desc: '', bg: '#52c19ccf' },
  //   { t: 'Docker', desc: '', bg: '#52c19ccf' },
  //   { t: 'Jest', desc: '', bg: '#52c19ccf' },
];

// UNIGIKACJA #15162e

export const Technologies = () => {
  return (
    <motion.div
      transition={{
        duration: 1,
        ease: 'easeOut',
        delay: 1,
      }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      initial={{ opacity: 0, display: 'none' }}
      animate={{ opacity: 1, display: 'flex' }}
      className="root-technologies"
    >
      <div className="technologies-wrapper">
        {technologies.map((item, index) => (
          <motion.div
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{
              delay: 1 + index * 0.2,
              duration: 0.8,
              type: 'twin',
              stiffness: 100,
              damping: 10,
            }}
            key={index}
            className="technologyDown"
          >
            <h1 style={{ color: item.bg }}>{item.t.toUpperCase()}</h1>
            {item.list?.map((item, i) => (
              <div className="icons-wrapper" key={i}>
                <div className="single-icon-wrapper">
                  <img
                    className="logo"
                    src={item.icon}
                    alt={item.icon}
                    key={i}
                  />
                  <p style={{ color: item.cl }} className="text-logo">
                    {item.level.toUpperCase()}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
