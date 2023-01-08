import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import {images} from '../constant'

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <img src={images.discord} alt="" className='socialMedia__iconAlternative' />
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <BsInstagram />
    </div>
    <div >
      <img src={images.upwork1} alt="" className='socialMedia__iconAlternative' />
    </div>
  </div>
);

export default SocialMedia;