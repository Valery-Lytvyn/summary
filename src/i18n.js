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
               summaryText: [
                  `Since July 2022, I have dedicated myself to self-taught web development with the support of a
                   mentor. Which allowed me to successfully master such basic technologies as HTML, CSS/SASS,
                    Bootstrap, JavaScript, React, Redux and Git. The field of web development has been an exciting
                     challenge for me because it provides constant opportunities to learn, grow and find innovative
                      solutions in the face of complex problems.`,
                  `At the moment, my main goal is to take a position in a dynamic company where I can collaborate 
in a team on exciting projects. I am ready to apply and improve the knowledge gained while contributing
to the success of the organization. Working alongside talented professionals will not only provide a 
stimulating environment, but will also allow me to continually expand my skill set.`,
                  `I believe that my self-motivation, persistence, and passion for web development make me an ideal 
candidate for a team-oriented position. I want to take on new challenges, adapt to evolving technologies, 
and use my creative problem-solving skills to overcome obstacles. With a solid foundation in core web 
technologies and a firm grasp of popular frameworks like React and Redux, I feel confident in my ability 
to contribute significantly to my future projects.`,
                  `Ultimately, I'm looking for a position that not only allows me to leverage my current experience, but
                  also challenges me to constantly learn, innovate, and push the boundaries of web development. I am 
                                    excited at the prospect of joining a company that shares my enthusiasm for creating exceptional digital 
                                    experiences and where I can apply my skills to high-quality projects.`
               ],
               portfolio: 'portfolio',
               portfolioText: `My portfolio can be viewed at`,
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
                  `In addition to my technical skills, I possess a number of valuable skills that contribute to my effectiveness as a web developer and team member.`,
                  `Honesty, integrity and responsibility are guiding principles in both personal and professional life. 
I believe in maintaining transparency and honesty in all my interactions, fostering trust and 
open communication.`,
                  `One of my strengths is the ability to focus on set goals. I can break down complex projects 
into manageable tasks and focus on achieving goals.`,
                  `Initiative is another trait that pushes me to go beyond my role. 
Taking initiative allows me to increase the value of projects and take responsibility for my 
professional growth.`,
                  `Experience working with large volumes of information improves my ability to work with large datasets, complex documentation and large codebases. I can conveniently organize and synthesize information, which facilitates effective decision-making and supports team collaboration.`,
                  `Analytical thinking is a skill I've honed throughout my web development journey. I am able to analyze complex problems and find logical and effective solutions.`
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
               summaryText: [
                  `З липня 2022 року я присвятив себе самостійному вивченню веб-розробки за підтримки наставника. Що дозволило мені успішно освоїти такі базові технології як HTML, CSS/SASS,
               Bootstrap, JavaScript, React, Redux і Git. Сфера веб-розробки стала захоплюючим викликом для мене, тому що вона надає постійні можливості навчатися, розвиватися та знаходити інноваційні
               вирішення складних проблем.`,
                  `На даний момент моя головна мета – зайняти посаду в динамічній компанії, де я можу співпрацювати в команді над захоплюючими проектами. Я готовий застосовувати та вдосконалювати отримані знання, одночасно сприяючи успіху організації. Робота разом із талановитими професіоналами не лише забезпечить стимулююче середовище, але й дозволить мені постійно розширювати свій набір навичок.`,
                  `Я вважаю, що моя самомотивація, наполегливість і пристрасть до веб-розробки роблять мене ідеальним кандидатом на посаду, орієнтовану на команду. Я хочу приймати нові виклики, адаптуватися до технологій, що розвиваються, і використовувати свої творчі навички вирішення проблем, щоб подолати перешкоди. Маючи міцну основу в основних веб-технологіях і твердо володіючи такими популярними фреймворками, як React і Redux, я впевнений у своїй здатності зробити значний внесок у свої майбутні проекти.`,
                  `Зрештою, я шукаю посаду, яка не тільки дозволить мені використовувати мій поточний досвід, але й буде змушувати мене постійно навчатися, впроваджувати інновації та розширювати межі веб-розробки. Я радий перспективі приєднатися до компанії, яка розділяє мій ентузіазм у створенні виняткового цифрового досвіду та де я можу застосувати свої навички у високоякісних проектах.`
               ],
               portfolio: 'портфоліо',
               portfolioText: `Моє портфоліо можна переглянути за адресою`,
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
                  `Окрім моїх технічних навичок, я володію низкою цінних навичок, які сприяють моїй ефективності як веб-розробника та члена команди.`,
                  `Чесність, порядність і відповідальність є керівними принципами, як в особистому, так і в професійному житті. Я вірю в збереження прозорості та чесності в усіх своїх взаємодіях, сприяння довірі та відкритому спілкуванню.`,
                  `Однією з моїх сильних сторін є вміння зосереджуватися на поставлених цілях. Я можу розбити складні проекти на керовані завдання та зосередитися на досягненні цілей.`,
                  `Ініціативність — ще одна риса, яка спонукає мене виходити за рамки своєї ролі. Ініціатива дозволяє мені підвищувати цінність проектів і брати відповідальність за свій професійний ріст.`,
                  `Досвід роботи з великими обсягами інформації покращує мою здатність працювати з великими наборами даних, складною документацією та великими кодовими базами. Я вмію зручно організовувати та синтезувати інформацію, що сприяє прийняттю ефективних рішень і підтримує командну співпрацю.`,
                  `Аналітичне мислення – це навичка, яку я відточив упродовж мого шляху веб-розробки. Я вмію аналізувати складні проблеми та знаходити логічні та ефективні рішення.`
               ],
            }
         },
      }
   });

export default i18n;



