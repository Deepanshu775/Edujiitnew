import React from 'react';
import './Programs.css';
import program_1 from '../../assets/assets/jiitstudent.png';
import program_2 from '../../assets/assets/gallery-3.png';
import program_3 from '../../assets/assets/program-3.png';
import program_icon_1 from '../../assets/assets/program-icon-1.png';
import program_icon_2 from '../../assets/assets/program-icon-2.png';
import program_icon_3 from '../../assets/assets/program-icon-3.png';

function Programs() {
  return (
    <div className='programs' id='program2'>
      <div className='uprogram'>
        <img src={program_1} alt='' />
        <div className='caption'>
          <img src={program_icon_1} alt='' />
          <p>Graduation Degree</p>
        </div>
      </div>

      <div className='uprogram'>
        <img src={program_2} alt='' />
        <div className='caption'>
          <img src={program_icon_2} alt='' />
          <p>Master Degree</p>
        </div>
      </div>

      <div className='uprogram'>
        <img src={program_3} alt='' />
        <div className='caption'>
          <img src={program_icon_3} alt='' />
          <p>PhD Degree</p>
        </div>
      </div>
    </div>
  );
}

export default Programs;
