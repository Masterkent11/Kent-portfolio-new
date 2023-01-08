import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { AppWrap,MotionWrap} from '../../wrapper';
import { urlFor, client } from '../../client';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';

const Works = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [loadMore, setLoadMore] = useState(3);

  useEffect(() => {
    async function fetchData() {
      const query = '*[_type == "works"]';
      const data = await client.fetch(query);
      setWorks(data);
      setFilterWork(data);
    }
    fetchData();
  }, []);



  //Button Load More
  const showMoreItems =() => {
    setAnimateCard([{ y: 100, opacity: 1 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      
      setLoadMore((prevValue)=>prevValue + 1)
    },500)
    
  }
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
      if(item === 'All'){
        setFilterWork(works);
      }
      else{
        setFilterWork(works.filter((works)=>works.tags.includes(item)));
      }
    }, 500);
  };


  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <Stack className="app__work-filter"
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'flex-start'}
          alignItems={'center'}
          flexWrap={'wrap'}
          sx={{margin: '4rem 0 2rem'}}
      >
        {['UI/UX', 'Html/CSS', 'Bootstrap', 'Vanilla JS', 'React JS', 'Laravel', 'Node JS', 'Mini Project', 'Capstone', 'All'].map((item, index) => (
        <Stack
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </Stack>
        ))}
      </Stack>
     
      <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
        >
          {filterWork.slice(0,loadMore).map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <VisibilityIcon/>
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                 <GitHubIcon/>
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <Stack className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <Stack className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </Stack>
            </Stack>
          </div>
        ))}
      </motion.div>

      <motion.div 
          className='item__loadMore'
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          >
            {loadMore?(<Button 
          variant='contained'
          onClick={showMoreItems}
          className={'button__loadMore'}
        >
          Load More
        </Button>): null}
      
      </motion.div>
      
    </>
  );
};

export default AppWrap(
  MotionWrap(Works, 'app__works'),
  'work',
  'app__primarybg',
);