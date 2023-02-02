import React from 'react';
import { motion } from 'framer-motion';

import {AppWrap} from '../../wrapper';
import { images } from '../../constant';



const scaleVariants = {
  whileInView: {
    translate: [0,45],
    scale: [0, 1],
    opacity: [0, 2],
    transition: {
      duration: 2,
      yoyo: Infinity,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (


  

  <div className="app__header app__flex">
    <motion.div
      whileInView={{ y: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
        <span className="wave">👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Kent</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Full Stack Web Developer</p>
          <p className="p-text">React Js Developer</p>
          <p className="p-text">UX/UI Designer</p>
          <p className="p-text">Freelancer</p>
        </div>
      </div>
    </motion.div>
    
    

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.kent1} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.sanity, images.react, images.javascript,images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');