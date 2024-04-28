import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/assets/next-icon.png';
import back_icon from '../../assets/assets/back-icon.png';
import user1 from '../../assets/assets/user-1.png';
import user2 from '../../assets/assets/user-2.png';
import user3 from '../../assets/assets/user-3.png';
import user4 from '../../assets/assets/user-4.png';

const Testimonials = () => {
    const slider=useRef()
    let tx=0;

 const slideforward=()=> {
    if(tx>-50) {
        tx-=25;
    }

    slider.current.style.transform=`translateX(${tx}%)`;

 }
 
 const slidebackward=()=> {
    if(tx<0) {
        tx+=25;
    }

    slider.current.style.transform=`translateX(${tx}%)`;

    
 }


  return (
    <div className='test' id='testimonials2'>
      <img src={next_icon} alt='' className='next-btn' onClick={slideforward} />
      <img src={back_icon} alt='' className='back-btn' onClick={slidebackward} />
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className='userinfo'>
                <img src={user1} alt='' />
                <div>
                  <h3>Vani</h3>
                  <span>Cisco, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='userinfo'>
                <img src={user2} alt='' />
                <div>
                  <h3>Yash Chaudhary</h3>
                  <span>Amazon, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='userinfo'>
                <img src={user3} alt='' />
                <div>
                  <h3>Neha</h3>
                  <span>Apple, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='userinfo'>
                <img src={user4} alt='' />
                <div>
                  <h3>Kushal</h3>
                  <span>Cisco, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
