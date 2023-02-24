import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
   .use(initReactI18next)
   .init({
      fallbackLng: 'en',
      interpolation: {
         escapeValue: false,
      },

      resources: {
         en: {
            translation: {
               fullName: 'Valery Lytvyn',
               speciality: 'front end developer',
               city: 'Odesa',
               lang: 'languages',
               ukrainian: 'ukrainian',
               english: 'english',
               summary: 'summary',
               summaryText: 'Lorem ipsum dolor sit amet consectetur',
               projectDescription: ['The project uses: React, Bootstrap, Css',
                  'The project uses: React, Bootstrap,  Scss',],
               projects: 'projects',
               skills: 'skills',
               education: 'education',
               university: 'Ivano-Frankivsk National Technical University of Oil and Gas (1998-2003)',
               profession: 'Construction of oil and gas pipelines and storage facilities',
               experience: 'experience',
               position: 'PJSC SINTEZ OIL - Accountant of the control and audit department (07.2010-07.2022)',
               softSkills: ' softSkills',
               softSkillsArr: [
                  'Honesty, decency, responsibility.',
                  "Ability to concentrate on set goals, initiative, analytical thinking.",
                  "Experience working with a lot of information.",
                  "The desire to gain new knowledge and skills."
               ],
            }
         },
         ua: {
            translation: {
               fullName: 'Валерій Литвин',
               speciality: 'веб-розробник',
               city: 'Одеса',
               lang: 'Мови',
               ukrainian: 'українська',
               english: 'англійська',
               summary: 'резюме',
               summaryText: 'Lorem ipsum dolsadsdhgfjsxckshkasdhfkjhfdkdhsfor sit amet consectetur',
               projectDescription: ['У проєкті використовуються: React, Bootstrap, Css',
                  'У проєкті використовуються: React, Bootstrap, Scss',],
               projects: 'проєкти',
               skills: 'навички',
               education: 'освіта',
               university: 'Івано-Франківський національний технічний університет нафти і газу (1998-2003)',
               profession: 'Спорудження газонафтопроводів та газонафтосховищ',
               experience: 'Досвід роботи',
               position: 'ПрАТ “Синтез Ойл” - Обліковець контрольно-ревізійного відділу (07.2010-07.2022)',
               softSkills: 'Ключові навички',
               softSkillsArr: [
                  'Чесність, порядність, відповідальність.',
                  'Вміння концентруватись на поставлених цілях, ініціативність, аналітичне мислення.',
                  'Досвід роботи з великою кількістю інформації.',
                  'Бажання отримати нові знання та навички'
               ],
            }
         },
      }
   });

export default i18n;