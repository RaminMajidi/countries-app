
import LanguageSwitcher from '@/_components/LanguageSwitcher';
import ThemeChanger from '@/_components/ThemeChanger';
import { getTranslations } from 'next-intl/server';

export default async function HomePage() {
  const t = await getTranslations('app');
  console.log(t("name"));
  return (
    <>
      <h1>{t('name')}</h1>
      <LanguageSwitcher />
      <br />
      <ThemeChanger />
    </>
  );
}
