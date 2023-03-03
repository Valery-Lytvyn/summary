import React from 'react';
import { useTranslation } from 'react-i18next';
import TextContainer from '../../textContainer/TextContainer';
import Title from '../../title/Title';

function Experience() {
   const { t } = useTranslation();

   return (
      <>
         <Title content={t('experience')} label={'orangePartTitle'} />
         <TextContainer text={t('position')} />
      </>
   )
}

export default Experience