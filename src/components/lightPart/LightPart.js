import React from 'react';
import LanguageSelection from './languageSelection/LanguageSelection';
import './lightPart.scss';
import Summary from './summary/Summary';
import SoftSkills from './softSkills/SoftSkills';
import HardSkills from '../hardSkills/HardSkills';
import LanguageSkils from '../languageSkils/LanguageSkils';
import Portfolio from './portfolio/Portfolio';


function LightPart() {
   return (
      <div className='lightPart m-0'>
         <div className="container">
            <div className='d-none d-md-block' >
               <LanguageSelection />
            </div>
            <Summary />
            <Portfolio />
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