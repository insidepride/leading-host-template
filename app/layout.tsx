import type { Metadata } from 'next';
import '@fontsource-variable/manrope';
import '@fontsource/prata';
import './globals.css';

export const metadata: Metadata = {
  title: 'Демо-шаблон сайта ведущего',
  description: 'Обезличенный премиальный шаблон сайта ведущего для демонстрации клиентам.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
