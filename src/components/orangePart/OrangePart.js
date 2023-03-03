import React from 'react';
import Education from '../orangePart/education/Education';
import Experience from '../orangePart/experience/Experience';
import './orangePart.scss';


function OrangePart() {
   return (
      <div className='orangePart m-0'>
         <div className="container">
            <Education />
            <Experience />
         </div>
      </div>
   )
}

export default OrangePart