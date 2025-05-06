import React from 'react';
import {useTranslations} from 'next-intl';
import { LanguageSwitcher } from '@/components/custom/LanguageSwitcher';

export default  function page() {
    const t = useTranslations("HomePage")
  return (
    <div>
        <LanguageSwitcher />
        <p>{t('title')}</p>
        <p>{t('about')}</p>
    </div>
   
  )
}
