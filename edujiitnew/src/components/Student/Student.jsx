import React from 'react'
import './Student.css'

const Student = () => {
    const handleClick = () => {
        window.location.href = 'https://webportal.jiit.ac.in:6011/studentportal/#/';
      };
    
      return (
        <div>
          <button className="studentportal" onClick={handleClick}>Student Portal</button>
        </div>
      );
}

export default Student
