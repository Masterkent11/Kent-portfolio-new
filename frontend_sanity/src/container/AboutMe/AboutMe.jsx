import React, {useState} from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import { images } from '../../constant';
import { Swipe } from './Swipe.tsx';




const AboutMe = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const playSound = () => {
        const sound = new Audio(images.ouch);
        sound.play();
        setIsPlaying(true);
    };


    return (
        <>
        <Stack display={'flex'}>

        
             <h2 className="head-text">Service offer</h2> 
             <Stack
                display={'flex'}
                gap={6}
                flexWrap={'wrap'}
                margin={1}
                flexDirection={{xs:'column',sm: 'column', md: 'row'}}
                justifyContent={'center'}
                alignItems={'center'}
                >
                       
                <Stack flex={6}>
        
                    <motion.div
                      whileInView={{ x: [50, 50, 0], opacity: [0, 0, 1] }}
                      transition={{ duration: 1.5 }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      whileHover={{ scale: 0.9 }}
                      whileTap={{ scale: 1.1 }}
                      
                     
                        >
                                   <Swipe/>
                       
                        {/* <img src={images.kent}
                             alt=""  
                             className='image__aboutMe' 
                             onClick={playSound}
                             /> */}
                    </motion.div>
                </Stack>
                <Stack  
                    flex={6}
                    >
                    <motion.div
                    whileInView={{ x: [-200, -50, 0], opacity: [0, 0, 1] }}
                    transition={{ duration: 1.5 }}
                    className="aboutMe__main"
                    >
                    <Typography variant="body" color="initial" className='text__AboutMe'>
                    Looking for a great and <span className='text__AboutMe__Title'>talented Frontend Developer? </span>Look no further! I'm an expert in building beautiful, responsive websites and I've got the skills to bring your next project to life. My tech stack includes React JS, React Router, Material UI, SASS, Sanity, Firebase, MongoDB, Express JS, and Node JS. I specialize in creating user-friendly and visually appealing websites that are easy to navigate and use. With 3 years of experience and a background in full-stack development, I'm ready to take on any challenge. Let's make something great together!
                    </Typography>
                    <Typography variant="body" color="initial" className='text__AboutMe'>
                    I focus on quality, aesthetics, and professionalism. I have a strong foundation and proficient experience, and I am eager to be a part of helping your business reach its goals.   
                    </Typography>
                    </motion.div>
                </Stack>

             </Stack>
             </Stack>
        </>
    );
};

export default AppWrap(
    MotionWrap(AboutMe, 'app__AboutMe'),
    'AboutMe',
    'app__whitebg',
  );