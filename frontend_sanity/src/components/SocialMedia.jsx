import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import {images} from '../constant'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialMedia = () => (
  <div className="app__social">
    

    <a href="https://discord.com/channels/KentAsh#1807" target='_blank'>
    <div>
      <img src={images.discord} alt="" className='socialMedia__iconAlternative' />
    </div>
    </a>
    
    <a href="https://www.facebook.com/profile.php?id=100079842521652" target='_blank'>
    <div>
      <FaFacebookF />
    </div>
    </a>
    
    <a href="https://www.linkedin.com/in/kent-ashley-clementir-776090217/" target='_blank'>
    <div>
      <LinkedInIcon />
    </div>
    </a>
    

    <a href="https://www.upwork.com/freelancers/~01eebc38b17d75dfab" target="_blank"> 
    <div >
    <img src={images.upwork1} alt="" className='socialMedia__iconAlternative' />
    </div>
    </a>
    
  </div>
);

export default SocialMedia;