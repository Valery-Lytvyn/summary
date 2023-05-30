import React from 'react'
import Title from '../../title/Title'
import { useTranslation } from 'react-i18next';
import TextContainer from '../../textContainer/TextContainer';

function Portfolio() {
   const { t } = useTranslation();
   const portfolioLink = `https://valery-lytvyn.github.io/portfolio`;
   return (
      <div>
         <Title content={t('portfolio')} label={'lightPartTitle'} />
         <div className="d-flex align-items-center">
            <TextContainer text={t('portfolioText')} />
            <a href={portfolioLink} target='_blank' className='ps-1 text-dark fw-bolder fs-5' rel='noopener noreferrer'>{portfolioLink}</a>
         </div>
      </div>
   )
}

export default Portfolio