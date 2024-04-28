import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero container' id='hero2'>
      <div className='hero-text'>
        <h1>We Ensure better education for a better World</h1>
        <p>Jaypee Institute of Information Technology, Noida was established in the year 2001 and has been declared as a "Deemed to be University" under Section 3 of UGC Act 1956 in the year 2004.</p>
        <Link to='program2' smooth={true} offset={-260} duration={500}><button className='btn'>Explore more</button></Link>
      </div>
    </div>
  );
};

export default Hero;
