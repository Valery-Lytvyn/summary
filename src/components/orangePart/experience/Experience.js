import React from 'react';
import { useTranslation } from 'react-i18next';
import List from '../../list/List';
import { TranslationHook } from '../../../hooks/TranslationHook';
import TextContainer from '../../textContainer/TextContainer';
import Title from '../../title/Title';
import './experience.scss';

function Experience() {
   const { t } = useTranslation();

   return (
      <div className='experience'>
         <Title content={t('experience')} label={'orangePartTitle'} />
         <TextContainer text={t('position')} />
         <List arr={TranslationHook('professional_duties')} />
      </div>
   )
}

export default Experience