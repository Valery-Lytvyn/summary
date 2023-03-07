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
               speciality: 'front-end developer',
               city: 'Odesa, Ukraine',
               lang: 'languages',
               ukrainian: 'ukrainian',
               english: 'english',
               summary: 'summary',
               summaryText: `During the last 6 months, I studied web development on my own (with the support of a mentor) and mastered HTML, CCS / SASS, Bootstrap, JavaScript, React, Git.
               For me, web development is an exciting challenge to constantly learn and develop, to find interesting solutions in difficult situations.
               At the moment, my goal is to find a job in a company where I can work in a team on interesting projects, using and improving the acquired knowledge.` ,
               projectDescription: [
                  {
                     title: 'ToDo List app',
                     motto: `What is a ToDo List? The definition is a simple one. It’s a list of tasks you need to complete or things that you want to do.`,
                     description: 'The project uses: React, Bootstrap,  Scss.'
                  },
                  {
                     title: 'Weather Forecast',
                     motto: `Web page for viewing the weather forecast.`,
                     description: 'The project uses: Javascript, Css, Html.',
                  },
                  {
                     title: 'LANDING PAGE MONTICELLO',
                     motto: `An example of a landing page.`,
                     description: 'The project uses: React, Bootstrap,  Scss.'
                  },
                  {
                     title: 'search movies app',
                     motto: `App to search for movies, series or episodes by title.`,
                     description: 'The project uses: Javascript, Css, Html.'
                  },
               ],
               projects: 'projects',
               skills: 'skills',
               education: 'education',
               university: 'Ivano-Frankivsk National Technical University of Oil and Gas (1998-2003)',
               profession: 'Construction of oil and gas pipelines and storage facilities',
               experience: 'experience',
               position: 'PJSC SINTEZ OIL - Accountant of the control and audit department (07.2010-07.2022)',
               professional_duties: [
                  'Compilation of reports on the accounting of petroleum products',
                  'Conducting monthly inventories',
                  'Analysis of occurrence of losses and surpluses of oil products'
               ],
               softSkills: 'soft Skills',
               softSkillsArr: [
                  'Honesty, decency, responsibility.',
                  'Ability to concentrate on set goals, initiative, analytical thinking.',
                  'Experience working with a lot of information.',
                  'Desire to acquire new knowledge and skills',
               ],
            }
         },
         ua: {
            translation: {
               fullName: 'Валерій Литвин',
               speciality: 'веб-розробник',
               city: 'Одеса, Україна',
               lang: 'Мови',
               ukrainian: 'українська',
               english: 'англійська',
               summary: 'резюме',
               summaryText: `Впродовж останніх 6 місяців я самостійно(за підтримки ментора) вивчав веб розробку i  опанував HTML, CCS / SASS, Bootstrap, JavaScript, React, Git.
               Для мене веб розробка є захоплюючим викликом постійно навчатися та розвиватись, знаходити цікаві рішення у складних ситуаціях.
               На даний момент моя мета - знайти роботу в компанії, де я зможу  працювати в команді над цікавими проєктами, використовуючи та вдосконалюючи здобуті знання. `,
               projectDescription: [
                  {
                     title: 'Додаток ToDo List',
                     motto: `Що таке ToDo List? Визначення просте. Це список завдань, які вам потрібно виконати, або речей, які ви хочете зробити.`,
                     description: 'У проєкті використовуються: React, Bootstrap, Scss.',
                  },
                  {
                     title: 'Прогноз погоди',
                     motto: `Веб-сторінка для перегляду прогнозу погоди.`,
                     description: 'У проєкті використовуються: Javascript, Css, Html.'
                  },
                  {
                     title: 'LANDING PAGE MONTICELLO',
                     motto: `Приклад виконання лендінгової сторінки.`,
                     description: 'У проєкті використовуються: React, Bootstrap, Scss.',
                  },
                  {
                     title: 'Пошук фільмів',
                     motto: `Додаток для пошуку фільмів, серіалів або епізодів за назвою.`,
                     description: 'У проєкті використовуються: Javascript, Css, Html.'
                  },
               ],
               projects: 'проєкти',
               skills: 'навички',
               education: 'освіта',
               university: 'Івано-Франківський національний технічний університет нафти і газу (1998-2003)',
               profession: 'Спорудження газонафтопроводів та газонафтосховищ',
               experience: 'Досвід роботи',
               position: 'ПрАТ “Синтез Ойл” - Обліковець контрольно-ревізійного відділу (07.2010-07.2022)',
               professional_duties: [
                  'Складання звітів по обліку нафтопродуктів',
                  'Проведення щомісячних інвентаризацій',
                  'Аналіз виникнення втрат та надлишків нафтопродуктів'
               ],
               softSkills: 'Ключові навички',
               softSkillsArr: [
                  'Чесність, порядність, відповідальність.',
                  'Вміння концентруватись на поставлених цілях, ініціативність, аналітичне мислення.',
                  'Досвід роботи з великою кількістю інформації.',
                  'Бажання отримувати нові знання та навички'
               ],
            }
         },
      }
   });

export default i18n;



