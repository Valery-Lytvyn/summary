import React from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../title/Title';
import List from '../list/List';
import { hardSkillsArr } from '../../constants/hardSkillsArr';
import FlashingIcons from './flashingIcons/FlashingIcons';
import './hardSkills.scss';

function HardSkills() {
   const { t } = useTranslation();

   return (
      <div className='hardSkills'>
         <div className='d-none d-md-block' >
            <Title content={t('skills')} label={'darkPartTitle'} />
         </div>
         <div className='d-block d-md-none' >
            <Title content={t('skills')} label={'lightPartTitle'} />
         </div>
         <div className='hardSkillsContent'>
            <List arr={hardSkillsArr} />
            <FlashingIcons />
         </div>
      </div>
   )
}

export default HardSkills