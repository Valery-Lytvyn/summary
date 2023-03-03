import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelection from '../lightPart/languageSelection/LanguageSelection';
import Image from '../image/Image';
import Title from '../title/Title';
import Contacts from './contacts/Contacts';
import HardSkills from '../hardSkills/HardSkills'
import LanguageSkils from '../languageSkils/LanguageSkils';
import './darkPart.scss';
import photo from '../../assets/images/summary_photo.jpg';



function DarkPart() {
   const { t } = useTranslation();

   return (
      <div className='darkPart'>
         <div className='d-block d-md-none' >
            <LanguageSelection />
         </div>
         <div className='photo'>
            <Image img={photo} label={'photography'} />
         </div>
         <div className='ps-3 pe-3'>
            <Title content={t('fullName')} label={'fullName py-2'} />
            <Title content={t('speciality')} label={'darkPartTitle speciality'} />
            <Contacts />
            <div className='d-none d-md-block' >
               <HardSkills />
               <LanguageSkils />
            </div>
         </div>
      </div>
   )
}

export default DarkPart