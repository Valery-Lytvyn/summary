import React from 'react';
import LightPart from '../lightPart/LightPart';
import DarkPart from '../darkPart/DarkPart';
import OrangePart from '../orangePart/OrangePart';
import './resume.scss';



function Resume() {
   return (
      <div className='resume my-5 p-0'>
         <div className='row p-0 m-0'>
            <div className='col-md-5 col-lg-4 p-0'>
               <DarkPart />
            </div>
            <div className='col-md-7 col-lg-8 p-0'>
               <LightPart />
            </div>
            <div className='col p-0'>
               <OrangePart />
            </div>
         </div>
      </div>
   )
}

export default Resume