import React, { useState } from 'react';
import './About.css';
import about_img from '../../assets/assets/jiit audi.jpeg';
import play_icon from '../../assets/assets/play-icon.png';

const About = () => {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div className='about' id='about2'>
      <div className='about-left'>
        {showVideo ? (
          <iframe
            title="YouTube Video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/o5r0HEe4RNg"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        ) : (
          <>
            <img src={about_img} alt='' className='about-img' />
            <img src={play_icon} alt='' className='play-icon' onClick={toggleVideo} />
          </>
        )}
      </div>
      <div className='about-right'>
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
        <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
        <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
      </div>
    </div>
  );
};

export default About;
