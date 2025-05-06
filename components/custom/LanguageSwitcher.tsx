"use client";
import { useRouter, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const switchLanguage = (locale: string) => {
    router.replace(pathname, { locale }); // this works with next-intl router
  };

  return (
    <select
      value={currentLocale}
      onChange={(e) => switchLanguage(e.target.value)}
      className="border px-2 py-1 rounded"
    >
      <option value="en">English</option>
      <option value="hi">हिन्दी</option>
      <option value="ta">தமிழ்</option>
      <option value="bn">বাংলা</option>
      <option value="te">తెలుగు</option>
      <option value="mr">मराठी</option>
      <option value="kn">ಕನ್ನಡ</option>
    </select>
  );
}
