import React from 'react';
import LightPart from '../lightPart/LightPart';
import DarkPart from '../darkPart/DarkPart';
import './resume.scss';



function Resume() {
   return (
      <div className='resume p-0'>
         <div className='row p-0 m-0'>
            <div className='col-md-4 p-0'>
               <DarkPart />
            </div>
            <div className='col-md-8 p-0'>
               <LightPart />
            </div>
         </div>
      </div>


   )
}

export default Resume