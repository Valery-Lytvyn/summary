import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from '../image/Image';
import Title from '../title/Title';
import Contacts from '../contacts/Contacts';
import LanguageSkils from '../languageSkils/LanguageSkils';
import './darkPart.scss';
import photo from '../../assets/images/photo.jpg';


function DarkPart() {
   const { t } = useTranslation();

   return (
      <div className='darkPart'>
         <div className='photo'>
            <Image img={photo} label={'photography'} />
         </div>
         <div className='ps-3 pe-3'>
            <Title content={t('fullName')} label={'personName py-2'} />
            <Title content={t('speciality')} label={'darkPartTitle'} />
            <Contacts />
            <LanguageSkils />
         </div>
      </div>
   )
}

export default DarkPart