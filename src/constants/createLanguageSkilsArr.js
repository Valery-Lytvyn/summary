import { TranslationHook } from '../hooks/TranslationHook';

export const createLanguageSkilsArr = () => {
   return (
      [
         { lang: TranslationHook('ukrainian'), level: 'C2' },
         { lang: TranslationHook('english'), level: 'A1' },
      ]
   )
}