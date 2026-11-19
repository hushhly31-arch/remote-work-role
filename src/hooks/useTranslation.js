import { useRouter } from 'next/router';
import { useMemo } from 'react';
import * as idTranslations from '@/locales/id';
import * as enTranslations from '@/locales/en';

export const useTranslation = () => {
  const { locale } = useRouter();
  const t = useMemo(() => {
    return locale === 'en' ? enTranslations : idTranslations;
  }, [locale]);

  return { t, locale };
};

export default useTranslation;