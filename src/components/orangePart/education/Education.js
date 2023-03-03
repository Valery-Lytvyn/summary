import React from 'react';
import { useTranslation } from 'react-i18next';
import TextContainer from '../../textContainer/TextContainer';
import Title from '../../title/Title';

function Education() {
   const { t } = useTranslation();

   return (
      <>
         <Title content={t('education')} label={'orangePartTitle'} />
         <TextContainer text={t('university')} />
         <TextContainer text={t('profession')} />
      </>
   )
}

export default Education