import React from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../title/Title';
import List from '../list/List';
import { createLanguageSkilsArr } from '../../constants/createDataArr';

function LanguageSkils() {
   const { t } = useTranslation();
   return (
      <div className='language'>
         <div className='d-none d-md-block' >
            <Title content={t('lang')} label={'darkPartTitle'} />
         </div>
         <div className='d-block d-md-none' >
            <Title content={t('lang')} label={'lightPartTitle'} />
         </div>
         <List arr={createLanguageSkilsArr()} />
      </div>
   )
}

export default LanguageSkils