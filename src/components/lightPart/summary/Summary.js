import React from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../../title/Title';
import TextContainer from '../../textContainer/TextContainer';

function Summary() {
   const { t } = useTranslation();

   return (
      <div className='summary'>
         <Title content={t('summary')} label={'lightPartTitle'} />
         <TextContainer text={t('summaryText')} />
      </div>
   )
}

export default Summary