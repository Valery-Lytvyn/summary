import React from 'react';
import LanguageSelection from './languageSelection/LanguageSelection';
import './lightPart.scss';
import Summary from './summary/Summary';
import Projects from './projects/Projects';
import SoftSkills from './softSkills/SoftSkills';
import HardSkills from '../hardSkills/HardSkills';
import LanguageSkils from '../languageSkils/LanguageSkils';


function LightPart() {
   return (
      <div className='lightPart m-0'>
         <div className="container">
            <div className='d-none d-md-block' >
               <LanguageSelection />
            </div>
            <Summary />
            <Projects />
            <SoftSkills />
            <div className='d-block d-md-none' >
               <HardSkills />
               <LanguageSkils />
            </div>
         </div>
      </div>
   )
}

export default LightPart