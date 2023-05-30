import React from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../../title/Title';
import List from '../../list/List';
import { TranslationHook } from '../../../hooks/TranslationHook';

function Summary() {
   const { t } = useTranslation();

   return (
      <div className='summary'>
         <Title content={t('summary')} label={'lightPartTitle'} />
         <List arr={TranslationHook('summaryText')} />
      </div>
   )
}

export default Summary