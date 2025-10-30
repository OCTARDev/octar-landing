import {NextIntlClientProvider, hasLocale } from 'next-intl';
import {notFound} from 'next/navigation';
import { routing , directions } from '@/i18n/routing';
import en from '@/messages/en/en.json';
import ar from '@/messages/ar/ar.json';
import { ToastContainer } from 'react-toastify';



type Props = {
    children: React.ReactNode;
    params: Promise<{locale: string}>
}

export default async function LocaleLayout({ children , params }: Props) {

  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages = { en, ar }[locale];
  const direction = directions[locale] || "ltr";

  return (
      <div lang={locale} dir={direction} className={`${locale === "ar" ? "font-kufi":"font-neo"} overflow-x-hidden`}>
        <NextIntlClientProvider locale={locale} messages={messages} key={locale}>
          <ToastContainer position="top-right" autoClose={3000} /> 
              {children}
        </NextIntlClientProvider>
      </div>
  );
}