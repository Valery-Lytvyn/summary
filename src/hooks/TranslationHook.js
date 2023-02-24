import { useTranslation } from 'react-i18next';

export const TranslationHook = (value) => {
   const { t } = useTranslation();
   return (
      t(value, { returnObjects: true })
   )
}

