import React from 'react';
import {Box} from '@mui/material';

const NavigationDots = ({active}) => {
    return (
        <>
        <Box className='app__navigation'>
            {['home', 'about', 'aboutMe', 'work', 'skills', 'testimonials', 'contact'].map((item, index ) => (
            <a 
            href={`#${item}`}
            key={item+index}
            className="app__navigation-dot"
            style={active === item? {backgroundColor: '#313BAC'}: {}}
            />
        ))}
            </Box>
        </>
    );
};

export default NavigationDots;