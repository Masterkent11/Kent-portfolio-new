import React, {useEffect, useState} from 'react';
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
const tags = ['Full Stack Web Developer', 'React Js Developer', 'UX/UI Designer', 'Freelancer'];
const Header = () => {
  const [currentTag, setCurrentTag] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentTag((currentTag + 1) % tags.length);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, [currentTag]);

  return(


  <>
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



        <motion.d
            whileInView={{ y: [-30, 0, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 1.5 }}
          >
              {/* <div className="tag-cmp app__flex">
                  <motion.p
                      whileInView={{ x: [-200, -50, 0], opacity: [0, 0, 1] }}
                      transition={{ duration: 1.5 }}
                      className="p-text"
                      >
                    Full Stack Web Developer
                </motion.p>
                <motion.p
                  whileInView={{ x: [-200, -50, 0], opacity: [0, 0, 1] }}
                  transition={{ duration: 1.5 }}
                  className="p-text"
                >
                  React Js Developer
                
                </motion.p>

                <motion.p
                  whileInView={{ x: [-200, -50, 0], opacity: [0, 0, 1] }}
                  transition={{ duration: 1.5 }}
                  className="p-text"
                >
                  UX/UI Designer
                    
                </motion.p>

                <motion.p
                  whileInView={{ x: [-200, -50, 0], opacity: [0, 0, 1] }}
                  transition={{ duration: 1.5 }}
                  className="p-text"
                  
                >
                  Freelancer
  
                </motion.p>
              </div> */}

<motion.div className="tag-cmp app__flex"
whileInView={{ x: [-50, -50, 0], opacity: [0, 0, 1] }}
transition={{ duration: 1.5 }}>
      {tags.map((tag, index) => (
        <motion.p
          key={tag}
          whileInView={index === currentTag ? { y: [-200, 0, 0], opacity: [0, 0, 1] } : {}}
          transition={{ duration: 1.5 }}
          className="p-text"
        >
          {tag}
        </motion.p>
      ))}
    </motion.div>
        </motion.d>
        
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
      {[images.node, images.react, images.javascript,images.mongoDB].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
  </>
)};

export default AppWrap(Header, 'home');