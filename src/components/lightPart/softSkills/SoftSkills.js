import React from 'react';
import { useTranslation } from 'react-i18next';
import List from '../../list/List';
import Title from '../../title/Title';
import { TranslationHook } from '../../../hooks/TranslationHook';

function SoftSkills() {
   const { t } = useTranslation();

   return (
      <>
         <Title content={t('softSkills')} label={'lightPartTitle'} />
         <List arr={TranslationHook('softSkillsArr')} />
      </>
   )
}

export default SoftSkills