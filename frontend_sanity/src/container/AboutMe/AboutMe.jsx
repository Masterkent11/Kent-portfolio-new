import React, {useState} from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { Grid, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import { images } from '../../constant';



const AboutMe = () => {

    return (
        <>
        <Stack display={'flex'}>

        
             <h2 className="head-text">About Me</h2> 
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
                     
                        >
                        <img src={images.kent} alt=""  className='image__aboutMe' />
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
                    Hi there! My name is Kent and I am a <span className='text__AboutMe__Title'>Full-Stack Web Developer</span>. I graduated from Central Mindanao University with a Bachelor of Science in Mathematics. My interest in technology began in high school, and I really enjoy solving algorithms, exploring alternative solutions, and experimenting with different approaches to help my clients succeed. These are some of the things that I am proud of as a developer.
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