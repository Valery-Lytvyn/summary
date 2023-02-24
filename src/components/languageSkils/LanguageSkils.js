import React from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../title/Title';
import List from '../list/List';
import { createLanguageSkilsArr } from '../../constants/createLanguageSkilsArr';

function LanguageSkils() {
   const { t } = useTranslation();
   return (
      <div className='language'>
         <Title content={t('lang')} label={'darkPartTitle'} />
         <List arr={createLanguageSkilsArr()} />
      </div>
   )
}

export default LanguageSkils