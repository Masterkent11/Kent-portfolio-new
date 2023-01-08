import React, {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography'
import { Stack} from '@mui/system';
import { motion } from 'framer-motion';


import { AppWrap, MotionWrap } from '../../wrapper';


import {urlFor, client} from '../../client';
import { Button } from '@mui/material';


    const About = () => {
    const [abouts, setAbouts] = useState([]);
    const [loadMore, setLoadMore] = useState(2);
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    useEffect(() => {
        const query = '*[_type == "abouts"]' 
        client.fetch(query)
        .then((data)=>setAbouts(data))
    },[]);

    const clickMe = ()=>{
        setAnimateCard([{ y: 100, opacity: 1 }]);
        setTimeout(() => {
          setAnimateCard([{ y: 0, opacity: 1 }]);
          
          setLoadMore((prevValue)=>prevValue + 1)
        },500)
        
    }
    return (
        <>
        <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2> 
         
                <Stack className="app__profiles"
                display={'flex'}
                flexDirection={{xs:'row',lg:'row'}}
                justifyContent={'center'}
                flexWrap={'wrap'}
                >
                {abouts.slice(0,loadMore).map((about, index) => (
                    <motion.div
                    whileInView={{opacity: 1}}
                    whileHover={{scale: 1.1}}
                    transition={{duration: 0.5,type:'tween'}}
                    className="app__profile-item" 
                    key={about.title+index}
                    >
                        <a href={about.certificateLink} target="Coursera">
                        <img src={urlFor(about.imgUrl)} alt={about.title} className="certificate__image" />
                        <Typography  variant="h5" color="black" className='certificate__title'
                            >
                            {about.title}
                        </Typography>
                        </a>
                        <Typography color="black" sx={{marginTop:'10',fontSize:'12px'}}>
                            {about.description}
                        </Typography>
                    </motion.div>
                    ))}
                    
                </Stack>
                    <Button 
                        variant='contained'
                        onClick={clickMe}
                        className={'Certificate__Button'}
                        >
                        Load More
                    </Button>
        </>
    );
};

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg',
  );