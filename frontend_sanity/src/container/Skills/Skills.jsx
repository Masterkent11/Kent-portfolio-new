import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { Stack } from '@mui/system';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { Button } from '@mui/material';



const Skills = () => {
    const [experiences, setExperiences] = useState([]);
    const [skills, setSkills] = useState([]);
    const [filterWork, setFilterWork] = useState([]);

    useEffect(() => {
        const query = '*[_type == "experiences"]';
        const skillsQuery = '*[_type == "skills"]';
    
        client.fetch(query)
        .then((data) => {
          setExperiences(data);
        });
        client.fetch(skillsQuery)
        .then((data)=>{
          setFilterWork(data);
            setSkills(data);
        })
      }, []);
    return (
        <>
            <h2 className='head-text'>Skills and Experience</h2>
            <Stack 
            className="app__skills-container"
                sx={{
                    width:{md:'100%',lg:'100%'},
                    marginTop:'3rem',
                    display:{md:'flex'},
                    flexDirection:{md:'column',lg:'row'},
                    justifyContent:{md:'center',lg:'center',sm:'center',xs:'center'},
                    alignItems:{md:'center',lg:'center'},
                }}
                >
                <motion.div 
                    className='app__skills-list'
                    >
                            <Stack 
                                  display={'flex'} 
                                  flexDirection={'row'}
                                  flexWrap={'wrap'}>
                              
                                      {filterWork.slice(0,8).map((skill)=>(

                                           <motion.div
                                              whileInView={{opacity: [0,1]}}
                                              transition={{duration: 0.5}}
                                              className="app__skills-item app__flex"
                                              key={skill.name}
                                            >
                        
                                            <div 
                                              className="app__flex" 
                                              style={{
                                              backgroundColor: skill.bgColor
                                              }}
                                              >
                                          <img 
                                              src={urlFor(skill.icon)} 
                                              alt={skill.name} />
                                </div>
                                    <p className='p-text'>{skill.name}</p>
                        </motion.div>
                    ))}
                      </Stack>
                </motion.div>
        <Stack 
        className="app__skills-exp"
        sx={{
            marginLeft:{sm:'50px',xs:'30px'},
        }}

        >
          {experiences.map((experience) => (

            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </Stack>
            </Stack>
        </>
    );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'Skills',
  'app__whitebg',
);