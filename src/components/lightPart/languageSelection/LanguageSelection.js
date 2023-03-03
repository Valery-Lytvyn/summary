import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './languageSelection.scss';


function LanguageSelection() {
   const [currentLanguage, setCurrentLanguage] = useState("en");
   const { i18n } = useTranslation();

   const availableLanguages = ['en', 'ua'];

   const handleClick = (e) => {
      e.preventDefault();
      const selectedLanguage = e.target.id;
      setCurrentLanguage(selectedLanguage)
      i18n.changeLanguage(selectedLanguage);
   }

   return (
      <div className='languageSelection m-2'>
         <div className="togglebutton">
            {availableLanguages.map((lang, index) => (
               <button className='button'
                  id={lang}
                  onClick={handleClick}
                  style={{ background: lang === currentLanguage ? '#ffb347' : '#fff' }}
                  key={index}>{lang}</button>
            ))
            }
         </div>
      </div >
   )
}

export default LanguageSelection