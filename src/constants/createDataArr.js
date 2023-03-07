import { AiOutlineMail } from 'react-icons/ai';
import { TbBrandGithub } from 'react-icons/tb';
import { BsHouseDoor } from 'react-icons/bs';
import { SlSocialLinkedin } from 'react-icons/sl';
import { TranslationHook } from '../hooks/TranslationHook';
import { messengersIconsArray } from './messengersIconsArray';

export const createContactsDataArr = () => {
   return (
      [
         {
            icon: messengersIconsArray, info: { label: '+38 050 967 89 26', type: 'phone' }
         },
         {
            icon: <AiOutlineMail />, info: { label: 'lytvynvalery@gmail.com', type: 'mail', link: 'lytvynvb@gmail.com' }
         },
         {
            icon: <TbBrandGithub />, info: { label: 'github.com/Valery-Lytvyn', type: 'link', link: 'https://github.com/Valery-Lytvyn' }
         },
         {
            icon: <SlSocialLinkedin />, info: { label: 'linkedin.com/in/valery-lytvyn', type: 'link', link: 'https://linkedin.com/in/valery-lytvyn' }
         },
         {
            icon: <BsHouseDoor />, info: {
               label: TranslationHook('city'), type: 'link',
               link: `https://www.google.com/maps/place/Derybasivska+St,+Odesa,+Odes'ka+ oblast,
             + 65000 /@46.4828815, 30.7368341, 17.25z / data=!4m12!1m6!3m5!1s0x40c6316e739a0473: 0xcf2c8fe6b3f576f0!2sMonument +
              to + Duc + de + Richelieu!8m2!3d46.4881129!4d30.7411629!3m4!1s0x40c631981dfcbc61: 0xee397e13e5dcd70!8m2!3d46.4841143!4d30.7388449` }
         },
      ]
   )
}

export const createLanguageSkilsArr = () => {
   return (
      [
         { lang: TranslationHook('ukrainian'), level: 'C2' },
         { lang: TranslationHook('english'), level: 'A2' },
      ]
   )
}


